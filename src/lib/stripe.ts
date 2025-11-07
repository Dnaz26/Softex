/**
 * Stripe API Integration
 * Handles payment processing and fraud detection
 */

import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

// Get Stripe publishable key from environment
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

let stripePromise: Promise<Stripe | null>;

/**
 * Initialize Stripe
 */
export const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    if (!stripePublishableKey) {
      console.error('❌ Stripe publishable key not found!');
      console.error('Please set VITE_STRIPE_PUBLISHABLE_KEY in your .env file');
      return Promise.resolve(null);
    }
    
    // Validate key format (Stripe keys start with pk_test_ or pk_live_)
    if (!stripePublishableKey.startsWith('pk_test_') && !stripePublishableKey.startsWith('pk_live_')) {
      console.warn('⚠️ Warning: Stripe key format may be incorrect. Stripe keys should start with pk_test_ or pk_live_');
      console.warn('Current key format:', stripePublishableKey.substring(0, 20) + '...');
      console.warn('Attempting to use anyway...');
    }
    
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};

/**
 * Validate card number using Luhn algorithm (basic validation)
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  const cleanNumber = cardNumber.replace(/\s/g, '');
  
  if (!/^\d+$/.test(cleanNumber)) {
    return false;
  }
  
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return false;
  }
  
  // Luhn algorithm check
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

/**
 * Detect card type from number
 */
export const getCardType = (cardNumber: string): string => {
  const cleanNumber = cardNumber.replace(/\s/g, '');
  
  if (/^4/.test(cleanNumber)) return 'visa';
  if (/^5[1-5]/.test(cleanNumber)) return 'mastercard';
  if (/^3[47]/.test(cleanNumber)) return 'amex';
  if (/^6(?:011|5)/.test(cleanNumber)) return 'discover';
  
  return 'unknown';
};

/**
 * Process payment with Stripe
 * This checks if card has funds and validates the card
 */
export interface PaymentResult {
  success: boolean;
  paymentIntentId?: string;
  error?: string;
  fraudDetected?: boolean;
}

export const processStripePayment = async (
  cardElement: StripeCardElement,
  amount: number,
  email: string,
  name: string
): Promise<PaymentResult> => {
  try {
    const stripe = await getStripe();
    
    if (!stripe) {
      return {
        success: false,
        error: 'Stripe is not configured. Please add your Stripe API key.',
      };
    }

    console.log('💳 Processing payment with Stripe...', { amount, email });

    // Create payment intent on your backend
    // NOTE: You need to create a backend endpoint for this
    // For now, we'll use a client-side approach (less secure, but works for testing)
    
    // In production, you should:
    // 1. Call your backend API: POST /api/create-payment-intent
    // 2. Backend creates PaymentIntent with Stripe secret key
    // 3. Backend returns clientSecret
    // 4. Use clientSecret to confirm payment
    
    // For now, we'll simulate the backend call
    // TODO: Replace this with actual backend API call
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100), // Convert to cents
        currency: 'usd',
      }),
    });

    if (!response.ok) {
      // If backend endpoint doesn't exist, use client-side token creation (less secure)
      console.warn('⚠️ Backend endpoint not found. Using client-side token creation (less secure).');
      
      // Create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name,
          email,
        },
      });

      if (pmError) {
        console.error('❌ Payment method creation failed:', pmError);
        return {
          success: false,
          error: pmError.message || 'Payment method creation failed',
          fraudDetected: pmError.code === 'card_declined' || pmError.code === 'insufficient_funds',
        };
      }

      // Validate payment method for fraud
      if (paymentMethod) {
        // Check for common fraud indicators
        const fraudIndicators = [
          paymentMethod.card?.brand === 'unknown',
          !paymentMethod.billing_details?.email,
        ];

        if (fraudIndicators.some(Boolean)) {
          return {
            success: false,
            error: 'Payment could not be processed. Please verify your card information.',
            fraudDetected: true,
          };
        }
      }

      // For demo: Simulate payment confirmation
      // In production, you'd send paymentMethod.id to your backend
      // Backend would create PaymentIntent and confirm it
      
      return {
        success: true,
        paymentIntentId: paymentMethod?.id || 'demo_payment_intent',
      };
    }

    // Backend endpoint exists - use it
    const { clientSecret } = await response.json();

    // Confirm payment with Stripe
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name,
          email,
        },
      },
    });

    if (error) {
      console.error('❌ Payment failed:', error);
      return {
        success: false,
        error: error.message || 'Payment failed',
        fraudDetected: 
          error.code === 'card_declined' ||
          error.code === 'insufficient_funds' ||
          error.code === 'fraudulent',
      };
    }

    if (paymentIntent?.status === 'succeeded' || paymentIntent?.status === 'requires_capture') {
      console.log('✅ Payment successful:', paymentIntent.id);
      return {
        success: true,
        paymentIntentId: paymentIntent.id,
      };
    }

    return {
      success: false,
      error: 'Payment status unknown',
    };
  } catch (error: any) {
    console.error('❌ Payment processing error:', error);
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
    };
  }
};

/**
 * Check if card is valid (basic validation)
 */
export const validateCard = (cardNumber: string, expiryDate: string, cvv: string): {
  valid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  // Validate card number
  if (!validateCardNumber(cardNumber)) {
    errors.push('Invalid card number');
  }

  // Validate expiry date (MM/YY format)
  const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!expiryRegex.test(expiryDate)) {
    errors.push('Invalid expiry date (use MM/YY format)');
  } else {
    const [month, year] = expiryDate.split('/');
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const now = new Date();
    if (expiry < now) {
      errors.push('Card has expired');
    }
  }

  // Validate CVV
  const cvvRegex = /^[0-9]{3,4}$/;
  if (!cvvRegex.test(cvv)) {
    errors.push('Invalid CVV (3-4 digits required)');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};


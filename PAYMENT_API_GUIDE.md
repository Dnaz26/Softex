# Payment Processor API Guide

## Recommended APIs for Checking Card Funds

### 1. **Stripe** (Recommended) ⭐
**Best for:** Most developers, easy integration, great documentation

**Why Stripe:**
- ✅ Easy to integrate
- ✅ Excellent documentation
- ✅ Handles card validation and authorization
- ✅ Supports multiple payment methods
- ✅ Strong fraud protection
- ✅ Works with Escrow.com

**How it works:**
- Uses "Payment Intents" to authorize funds
- Holds funds without charging (authorization)
- Can capture later or release
- Perfect for Escrow workflows

**Pricing:** 2.9% + $0.30 per transaction

**Setup:**
1. Sign up at https://stripe.com
2. Get API keys (test and live)
3. Install: `npm install @stripe/stripe-js`
4. Use Payment Intents API

---

### 2. **PayPal** 
**Best for:** Users who prefer PayPal, international payments

**Why PayPal:**
- ✅ Users trust PayPal
- ✅ Supports PayPal balance + cards
- ✅ Good for international
- ✅ Can authorize without capturing

**Pricing:** 2.9% + $0.30 per transaction

**Setup:**
1. Sign up at https://developer.paypal.com
2. Get Client ID and Secret
3. Install: `npm install @paypal/react-paypal-js`
4. Use Orders API for authorization

---

### 3. **Square**
**Best for:** Businesses, in-person + online

**Why Square:**
- ✅ Good for businesses
- ✅ Supports cards and digital wallets
- ✅ Simple API

**Pricing:** 2.6% + $0.10 per transaction

---

### 4. **Authorize.Net**
**Best for:** Enterprise, high volume

**Why Authorize.Net:**
- ✅ Enterprise-grade
- ✅ Advanced fraud detection
- ✅ More complex setup

**Pricing:** Varies by plan

---

## Recommended: Stripe Integration

### Step 1: Install Stripe

```bash
npm install @stripe/stripe-js
```

### Step 2: Add to .env

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_SECRET_KEY=sk_test_...  # Server-side only!
```

### Step 3: Create Payment Intent (Server-side)

You'll need a backend API endpoint to create payment intents securely:

```typescript
// Backend API endpoint (Node.js/Express example)
app.post('/api/create-payment-intent', async (req, res) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  
  const { amount, currency = 'usd' } = req.body;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: currency,
    // Don't capture immediately - authorize only
    capture_method: 'manual',
  });
  
  res.json({ clientSecret: paymentIntent.client_secret });
});
```

### Step 4: Frontend Integration

```typescript
import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Create payment intent
const response = await fetch('/api/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: totalAmount }),
});

const { clientSecret } = await response.json();

// Confirm payment (this checks funds and authorizes)
const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: cardElement,
    billing_details: {
      name: formData.nameOnCard,
      email: formData.email,
    },
  },
});

if (error) {
  // Payment failed - insufficient funds, declined, etc.
  return { success: false, error: error.message };
} else if (paymentIntent.status === 'requires_capture') {
  // Funds authorized successfully!
  return { success: true, paymentIntentId: paymentIntent.id };
}
```

---

## Alternative: Use Escrow.com Payment Processing

Escrow.com can handle payments directly! You might not need a separate payment processor.

**Check Escrow.com's payment options:**
- They may support direct card processing
- Funds go directly into Escrow
- Simpler integration

**Contact Escrow.com support to ask:**
- "Do you have a payment processing API?"
- "Can we process credit cards directly through Escrow?"

---

## Quick Comparison

| API | Ease of Use | Cost | Best For |
|-----|-------------|------|----------|
| **Stripe** | ⭐⭐⭐⭐⭐ | 2.9% + $0.30 | Most developers |
| **PayPal** | ⭐⭐⭐⭐ | 2.9% + $0.30 | PayPal users |
| **Square** | ⭐⭐⭐⭐ | 2.6% + $0.10 | Businesses |
| **Authorize.Net** | ⭐⭐⭐ | Varies | Enterprise |

---

## Security Notes

⚠️ **IMPORTANT:**
- Never store card numbers on your server
- Use Stripe Elements or similar for secure card input
- Always use HTTPS
- Validate on server-side, not just client-side
- Store API keys securely (never in frontend code)

---

## Next Steps

1. **Choose Stripe** (recommended for beginners)
2. **Set up Stripe account** and get API keys
3. **Create backend endpoint** for payment intents
4. **Update PurchaseScreen** to use Stripe
5. **Test with Stripe test cards**

**Stripe Test Cards:**
- Success: `4242 4242 4242 4242`
- Insufficient funds: `4000 0000 0000 9995`
- Declined: `4000 0000 0000 0002`


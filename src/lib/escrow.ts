/**
 * Escrow.com API Integration
 * Handles secure transaction creation and management
 */

const ESCROW_API_BASE = 'https://api.escrow.com/2017-09-01';

export interface EscrowTransaction {
  parties: Array<{
    role: 'buyer' | 'seller';
    customer: string;
  }>;
  currency: string;
  description: string;
  items: Array<{
    title: string;
    description: string;
    type: string;
    inspection_period: number;
    quantity: number;
    schedule: Array<{
      amount: number;
      payer_customer: string;
      beneficiary_customer: string;
    }>;
  }>;
}

export interface EscrowTransactionResponse {
  id: number;
  reference: string;
  status: string;
  created_at: string;
  escrow_link?: string;
}

/**
 * Get Escrow API credentials from environment
 * Escrow.com uses API key authentication
 */
const getEscrowCredentials = () => {
  const apiKey = import.meta.env.VITE_ESCROW_API_KEY;
  
  if (!apiKey) {
    console.error('❌ Escrow.com API key not found!');
    console.error('Please set VITE_ESCROW_API_KEY in your .env file and restart the dev server.');
    throw new Error('Escrow.com API key not found. Please set VITE_ESCROW_API_KEY in your .env file.');
  }
  
  console.log('✅ Escrow API key loaded');
  return apiKey;
};

/**
 * Create a secure Escrow transaction
 */
export const createEscrowTransaction = async (
  buyerEmail: string,
  sellerEmail: string,
  amount: number,
  itemTitle: string,
  itemDescription: string
): Promise<EscrowTransactionResponse> => {
  const apiKey = getEscrowCredentials();
  
  // Escrow.com API authentication
  // The API key can be used directly or split if it contains a colon
  // Try different authentication methods based on Escrow.com's requirements
  let authHeader: string;
  
  if (apiKey.includes(':')) {
    // If API key contains colon, use it directly for Basic Auth
    authHeader = `Basic ${btoa(apiKey)}`;
  } else {
    // If it's a single token, use it as Bearer token or Basic Auth with empty password
    // Escrow.com typically uses Basic Auth with email:password or API key format
    authHeader = `Basic ${btoa(`${apiKey}:`)}`;
  }
  
  const transactionData: EscrowTransaction = {
    parties: [
      {
        role: 'buyer',
        customer: buyerEmail,
      },
      {
        role: 'seller',
        customer: sellerEmail,
      },
    ],
    currency: 'usd',
    description: `Purchase of ${itemTitle}`,
    items: [
      {
        title: itemTitle,
        description: itemDescription,
        type: 'general_merchandise',
        inspection_period: 259200, // 3 days in seconds
        quantity: 1,
        schedule: [
          {
            amount: amount,
            payer_customer: buyerEmail,
            beneficiary_customer: sellerEmail,
          },
        ],
      },
    ],
  };

  try {
    console.log('🔐 Creating Escrow transaction...', {
      buyerEmail,
      sellerEmail,
      amount,
      itemTitle,
    });

    const response = await fetch(`${ESCROW_API_BASE}/transaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Escrow API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });
      
      throw new Error(
        `Escrow transaction failed: ${response.statusText}. ${errorText}`
      );
    }

    const data = await response.json();
    console.log('✅ Escrow transaction created:', data);
    
    return data;
  } catch (error) {
    console.error('❌ Error creating Escrow transaction:', error);
    throw error;
  }
};

/**
 * Get transaction status
 */
export const getEscrowTransactionStatus = async (
  transactionId: number
): Promise<any> => {
  const apiKey = getEscrowCredentials();
  
  let authHeader: string;
  if (apiKey.includes(':')) {
    authHeader = `Basic ${btoa(apiKey)}`;
  } else {
    authHeader = `Basic ${btoa(`${apiKey}:`)}`;
  }

  try {
    const response = await fetch(`${ESCROW_API_BASE}/transaction/${transactionId}`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get transaction status: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting transaction status:', error);
    throw error;
  }
};

/**
 * List all transactions (for viewing purchases)
 * This allows you to see all transactions created through your API
 */
export const listEscrowTransactions = async (
  limit: number = 50,
  offset: number = 0
): Promise<any> => {
  const apiKey = getEscrowCredentials();
  
  let authHeader: string;
  if (apiKey.includes(':')) {
    authHeader = `Basic ${btoa(apiKey)}`;
  } else {
    authHeader = `Basic ${btoa(`${apiKey}:`)}`;
  }

  try {
    console.log('📋 Fetching Escrow transactions...');
    
    const response = await fetch(`${ESCROW_API_BASE}/transaction?limit=${limit}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error fetching transactions:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText,
      });
      throw new Error(`Failed to fetch transactions: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Transactions fetched:', data);
    return data;
  } catch (error) {
    console.error('❌ Error listing transactions:', error);
    throw error;
  }
};


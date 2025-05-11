const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // We only want to handle POST requests to this function.
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { amount, currency, donationType, success_url, cancel_url } = JSON.parse(event.body);

    // Basic validation for required parameters
    if (!amount || !currency || !donationType || !success_url || !cancel_url) {
      return { statusCode: 400, body: 'Missing required parameters (amount, currency, donationType, success_url, cancel_url).' };
    }

    const sessionParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: donationType === 'monthly' ? 'Monthly Donation' : 'One-Time Donation',
              // You can add more product details here if needed, like a description or images
            },
            unit_amount: Math.round(amount * 100), // Stripe expects amount in cents
            recurring: donationType === 'monthly' ? { interval: 'month' } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: donationType === 'monthly' ? 'subscription' : 'payment',
      success_url: success_url, // URL to redirect to on successful payment
      cancel_url: cancel_url,   // URL to redirect to if the user cancels
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return {
      statusCode: 500,
      // It's good practice not to expose detailed error messages to the client in production
      body: JSON.stringify({ error: 'Failed to create Stripe checkout session.' }),
    };
  }
};
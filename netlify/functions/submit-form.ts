import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers for all responses
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'text/plain'
      },
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Allow': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    if (!event.body) {
      throw new Error('No form data received');
    }

    // Parse the JSON body
    const formData = JSON.parse(event.body) as FormData;

    // Log the form data (for debugging)
    console.log('Form data received:', formData);

    // Here you can add additional processing:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Forward to another service

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        data: formData 
      }),
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process form submission',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      }
    };
  }
};

export { handler };

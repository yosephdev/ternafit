const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const params = new URLSearchParams(event.body);
    const formName = params.get('form-name');
    
    // Log the form submission
    console.log('Form submission received:', {
      formName,
      formData: Object.fromEntries(params.entries())
    });

    // Forward to Netlify's form submission endpoint
    const response = await fetch('https://api.netlify.com/api/v1/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process form submission' }),
    };
  }
};

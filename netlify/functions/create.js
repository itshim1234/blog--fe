// netlify/functions/create.js

const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const blogData = JSON.parse(event.body || '{}');

    // 👇 Replace with your actual backend endpoint
    const response = await axios.post('https://blog-be-5jgp.onrender.com/api/v1/create', blogData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Forwarded to backend successfully!',
        backendResponse: response.data,
      }),
    };
  } catch (error) {
    console.error('Error forwarding blog:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};

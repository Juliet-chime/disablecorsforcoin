// pages/api/jokes/random.js

import axios from 'axios';

// Enable CORS manually
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Handle CORS preflight requests
    res.status(200).end();
    return;
  }

  try {
    // const response = await axios.get('https://joke-api-strict-cors.appspot.com/jokes/random');
    const response = await axios.get('https://api.coinlore.net/api/tickers/');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching crypto currency:', error);
    res.status(500).json({
      type: 'error',
      message: error.message || 'An error occurred while fetching data',
    });
  }
}

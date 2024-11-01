
import axios from 'axios';
import { NextResponse } from 'next/server';
// Enable CORS manually
export async function GET(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  // res.setHeader('Access-Control-Allow-Methods', 'GET');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // const items = [
  //       { id: 1, name: 'Item 1' },
  //       { id: 2, name: 'Item 2' },
  //     ];
  //     return NextResponse.json(items, { status: 200 });

  const data = await fetch('https://api.coinlore.net/api/tickers/')
  const posts = await data.json()
 
  return Response.json(posts,{
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })

  // try{

  //   const response = await axios.get('https://api.coinlore.net/api/tickers/')
  //   console.log(response,'dddd',response.data,'uuuuuuuuu')
  //   // res.status(200).send({ response })
  //  return Response.json(response)
  // } catch(e){
  //   // res.status(500).send({ error: 'failed to fetch data' })
  // }



  // response.status(200).send({ response })
  // return  NextResponse(response, { status: 200 } )
  //  return res.status(200).json(response.data);
  // return response.data

  // if (req.method === 'OPTIONS') {
  //   // Handle CORS preflight requests
  //   res.status(200).end();
  //   return;
  // }

  // try {
  //   // const response = await axios.get('https://joke-api-strict-cors.appspot.com/jokes/random');
  //   const response = await axios.get('https://api.coinlore.net/api/tickers/');
  // //  return res.status(200).json(response.data);
  // return NextResponse.json(response, { status: 200 })

  // } catch (error) {
  //   console.error('Error fetching crypto currency:', error);
  //   res.status(500).json({
  //     type: 'error',
  //     message: error.message || 'An error occurred while fetching data',
  //   });
  // }
}

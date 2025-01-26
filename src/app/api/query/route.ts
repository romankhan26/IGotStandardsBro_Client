import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const data = await req.json(); // Get the payload data from the client
  
    try {
      // Call the real external API with the data received from the client
      const externalApiResponse = await fetch('https://i-got-standards-bro-backend.onrender.com/api/v1/query/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Pass the data as the payload
      });
  
      const responseData = await externalApiResponse.json(); // Get the response from the external API
  
      return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error fetching from external API:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch data from external API' }),
        { status: 500 }
      );
    }
  }
  
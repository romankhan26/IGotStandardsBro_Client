export async function POST(req: Request) {
  try {
    const data = await req.json(); 
    // console.log('Received data from frontend:', data);
    const externalApiResponse = await fetch("https://i-got-standards-bro-backend.onrender.com/api/v1/query/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!externalApiResponse.ok) {
      const errorText = await externalApiResponse.text();
      throw new Error(`External API Error: ${errorText}`);
    }

    const responseData = await externalApiResponse.json();
console.log(responseData)
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ err: "Failed to fetch data from external API" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json(); 
    // console.log(data,"checking API")
  
    const res = await axios.post("https://i-got-standards-bro-backend.onrender.com/api/v1/query/",data)
    // console.log('res: ', res.data);

   
    return NextResponse.json(res.data)
  
  } catch (err: unknown) {
    console.error('Error occurred:', err);
    return  NextResponse.json(err);
    }
}
  // const externalApiResponse = await fetch("https://i-got-standards-bro-backend.onrender.com/api/v1/query/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
     // if (!externalApiResponse.ok) {
    //   throw new Error(`External API Error`);
    // }

    // const responseData = await externalApiResponse.json();
    // console.log('responseData: ', responseData);

    // ((responseData), {
    //   status: 200,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*", 
    //     "Access-Control-Allow-Methods": "POST, OPTIONS",
    //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
    //   },
    // });

    // (JSON.stringify({ 
    //   error: `Failed to fetch data from external API: ${err.message || err}` 
    // }), {
    //   status: 500,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

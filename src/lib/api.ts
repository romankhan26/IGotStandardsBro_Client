export const fetchData = async (data: Record<string, unknown>) => {
    const response = await fetch("https://i-got-standards-bro-demo.vercel.app/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
//   console.log(data)
    const result = await response.json();
    return result;
  };
  
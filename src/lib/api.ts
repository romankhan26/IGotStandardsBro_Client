export const fetchData = async (data: Record<string, unknown>) => {
    const response = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  // console.log(data)
    const result = await response.json();
    return result;
  };
  
export async function GET(req, res) {
  const data = await fetch("https://api.coinlore.net/api/tickers/");
  const posts = await data.json();

  return Response.json(posts, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

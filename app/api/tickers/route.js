export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start") || "100";
  const limit = searchParams.get("limit") || "10";

  const data = await fetch(
    `https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`
  );
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

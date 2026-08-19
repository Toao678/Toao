const API_KEY = "yu28_dd02fb963ac7590c";
const API_URL = "https://yu28.top/api/kj?nbr=1";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const response = await fetch(API_URL, {
      headers: { "X-Api-Key": API_KEY }
    });
    if (!response.ok) {
      return res.status(response.status).json({ error: "Upstream API error: " + response.status });
    }
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
const fetch = require('node-fetch');

const API_KEY = "yu28_dd02fb963ac7590c";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const response = await fetch("https://yu28.top/api/kj?nbr=1", {
      headers: { "X-Api-Key": API_KEY }
    });
    const data = await response.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};

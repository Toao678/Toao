if (!response.ok) {
    return res.status(response.status).json({ error: `Upstream API error: ${response.status}` });
}

const data = await response.json();
res.json(data);
} catch (e) {
res.status(500).json({ error: e.message });
}
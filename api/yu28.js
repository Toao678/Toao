try {
    // Vercel 内置 fetch，无需 require
    const response = await fetch(API_URL, {
        headers: { "X-Api-Key": API_KEY }
    });
    
    // 如果上游接口报错，直接返回状态
    if (!response.ok) {
        return res.status(response.status).json({ error: `Upstream API error: ${response.status}` });
    }
    
    const data = await response.json();
    res.json(data);
} catch (e) {
    // 捕获代码执行错误
    res.status(500).json({ error: e.message });
}
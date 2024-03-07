const server = http.createServer((req, res) => {
    const { name } = url.parse(req.url, true).query;
    const greeting = greet(name);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(greeting);
});

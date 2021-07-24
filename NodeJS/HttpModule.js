const http = require('http');

const server = http.createServer((res, req) => {
    if(req.url === '/') {
        res.write('Zaryab');
        res.end();
    }

    if(req.url === '/api/course') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log(`Server is listening on port ${3000}`);
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Cosorio',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8081);


console.log('Escuchando el puerto 8081');
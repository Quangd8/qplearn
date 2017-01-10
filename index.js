var express = require('express');
var http = require('http');
var path = require('path');


const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist')));


const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
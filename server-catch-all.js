var express = require('express'),
	staticPath = __dirname + '/build/public/',
	server = express();

server.use(express.static(staticPath));

server.get('/*', function (request, response) {
    response.sendfile(staticPath + 'index.html');
});

server.listen(3000);

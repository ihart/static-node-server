var express = require( 'express' ),
    server = express();

server.use(express.static(__dirname + '/public/'));
server.listen(3000);

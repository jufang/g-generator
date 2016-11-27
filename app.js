/**
 * Created by Administrator on 2016/11/27.
 */
'use strict';
var http = require('http'),
    express = require('express'),
    server;
var app = express();
require('./routes.js')(app);

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * set template engine and set template path
 */
setTemplateEngine();
app.set('views', __dirname + '/views')


/**
 * start server
 */
startServer();//Create HTTP server


/**
 * Normalize a port into a number, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (!isNaN(port) && (port >= 0)) {
        // port number
        return port;
    }
    return false;
}

function startServer() {
    server = http.createServer(app).listen(app.get('port'), function(){
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
}

function setTemplateEngine(){
    var template = require('art-template');
    template.config('base', '');
    template.config('extname', '.html');
    app.engine('.html', template.__express);
    app.set('view engine', 'html');
}
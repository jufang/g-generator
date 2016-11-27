/**
 * Created by Administrator on 2016/11/27.
 */
'use strict';
var main = require('./handlers/main.js'),
    user = require('./handlers/user.js');

module.exports = function(app){
    app.get('/', main.home);
    app.get('/user', user.home);
};
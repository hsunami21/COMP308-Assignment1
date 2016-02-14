/* 
    File: server.js
    Author: Wendall Hsu 300739743
    Website: Wendall Hsu's Portfolio
    Description: Starts the local server on port 3000
*/

var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
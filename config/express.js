/* 
    File: express.js
    Author: Wendall Hsu 300739743
    Website: Wendall Hsu's Portfolio
    Description: Renders each view (web page)
*/

var express = require('express');
module.exports = function() {
    var app = express();
    
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    app.use(express.static('./public'));
    
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/contact.server.routes.js')(app);
    require('../app/routes/about.server.routes.js')(app);
    require('../app/routes/projects.server.routes.js')(app);
    require('../app/routes/skills.server.routes.js')(app);
   
    return app;
};
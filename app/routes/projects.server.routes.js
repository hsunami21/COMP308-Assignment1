module.exports = function(app) {
    var projects = require('../controllers/projects.server.controller.js');
    app.get('/projects', projects.render);
};
module.exports = function(app) {
    var skills = require('../controllers/skills.server.controller.js');
    app.get('/skills', skills.render);
};
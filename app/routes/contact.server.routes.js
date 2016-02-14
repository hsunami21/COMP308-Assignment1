module.exports = function(app) {
    var contact = require('../controllers/contact.server.controller.js');
    app.get('/contact', contact.render);
};
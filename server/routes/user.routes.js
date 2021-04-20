const UserController = require('../controllers/user.controller');
module.exports = function(app){
    app.post('/api/signup', UserController.create);
    app.post('/api/login', UserController.find);
}

const userController = require('../controllers/userControllers');
module.exports = (app) => {
    app.post('/api/users/create', userController.register);
} 
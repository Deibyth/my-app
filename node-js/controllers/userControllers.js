const User = require('../models/user');

module.exports = {
    register(req, res){
        const user = req.body; //datos cliente
        User.create(user, (err, data) => {
            if(err) {
                return res.status(501).json({
                    success: false,
                    mesage: 'error al crear usuario',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'usuario creado',
                data: data //id usuario creado
            });
        });
    }
};

const mysql = require('../config/config');
const User = {};
User.create = (user, result) => {
    const sql = `
    INSRT INTOP  user (
        email,
        firstname,
        lastname,
        phone,
        image,
        pass,
        creted_at,
        updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ;

    db.query(
        sql,
        {
            useremail,
            userfirstname,
            userlastname,
            userphone,
            userimage,
            userpass,
            new :Date(), 
            new :Date()
        },
        (err, res) => {
            if (err) {
                console.log('error: ', err)
                result(err, null);
            }
            else {
                console.log('Id del nuevo usuario: ', res.insertId);
                result(null, res.insertId);
                }
        }
    )
};
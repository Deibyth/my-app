const db = require("../config/config");

const User = {
    create: (user, result) => {
        const sql = `
    INSERT INTO users (
        email,
        firstname,
        lastname,
        phone,
        image,
        pass,
        created_at,
        update_at
    )
    VALUES (?,?,?,?,?,?,?,?)
    `;

        db.query(
            sql,
            [
                user.email,
                user.firstname,
                user.lastname,
                user.phone,
                user.image,
                user.pass,
                new Date(),
                new Date(),
            ],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                } else {
                    console.log("Id del nuevo usuario: ", res.insertId);
                    result(null, res.insertId);
                }
            }
        );
    },
};

module.exports = User;

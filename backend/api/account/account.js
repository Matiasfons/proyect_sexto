const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
var jwt = require('jsonwebtoken');
const dbConnection = require("../../helpers/db/database");
const bcrypt = require("bcrypt")

router.put('/update/password', async function (req, res) {
    try {
        const {token, password} = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user =decoded.id;
        const hash = await bcrypt.hash(password, 10);
        var response = await connection.query(
            `UPDATE users SET  Password = '${hash}' WHERE Id = '${id_user}';`);
        // var response = await connection.query(
        //     `INSERT INTO folders (id_user, name) VALUES ('${id_user}', '${nameFolder}')`);

        //RESPONSE
        res.json({
            "code": 200,
            "data":""
        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});

module.exports = router;


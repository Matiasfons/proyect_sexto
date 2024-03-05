const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const dbConnection = require("../../helpers/db/database");
const speakeasy = require('speakeasy');
var qrCode = require('qrcode')

router.post('/create', async function (req, res) {
    try {
        const { name, email, password } = req.body;
        let alredyEmail = false;
        let dataQr = "";
        const connection = await dbConnection();

        var response = await connection.query(
            `SELECT * FROM users WHERE Email = '${email}';`);

        if (response[0].length > 0) {
            alredyEmail = true;

        } else {

            alredyEmail = false;

        }
        if (alredyEmail == false) {
            var secret = speakeasy.generateSecret({
                name: `Uniandes Drive: ${email}`
            });
            qrCode.toDataURL(secret.otpauth_url, function (err, url) {
              dataQr = url;
            })
            const hash = await bcrypt.hash(password, 10);
            var responsePost = await connection.query(
                `INSERT INTO users (Name, Email, Password, role, Token) VALUES ('${name.toString()}', '${email.toString()}', '${hash}', 'USUARIO', '${secret.ascii}');`);

            var responsePlan = await connection.query(
                `INSERT INTO plans (name, id_user) VALUES ('Básico', '${responsePost[0].insertId.toString()}');`);

            // 
            res.statusCode = 200;
           
            return res.json({
                "code": 200,
                "data": "Creado Correctamente",
                "qr":dataQr

            });
        } else {
            res.statusCode = 404;
            return res.json({
                "code": 404,
                "data": "Email Registrado",
                "qr":""

            });
        }

    } catch (error) {
        console.log(error);
        res.statusCode = 404;
        return res.json({
            "code": 404,
            "data": error
        })
    }
});
module.exports = router;




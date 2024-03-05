const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const dbConnection = require("../../helpers/db/database");
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const speakeasy = require('speakeasy');


let transporter = nodemailer.createTransport(
    {
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: "matias.fonseca@fonlescompany.com",
            pass: "MatiasFonles2023."
        },
        logger: false,
        debug: false // include SMTP traffic in the logs
    },
    {
        // sender info
        from: 'noreply <matias.fonseca@fonlescompany.com>',

    }
);
router.post('/validate', async function (req, res) {
    try {
        const { token, code, ip } = req.body;
        const decoded = jwt.decode(token);
        const id_user = decoded.id;

        const connection = await dbConnection();

        var response = await connection.query(
            `SELECT * FROM users WHERE Id = '${id_user}';`);
        if (response[0].length > 0) {
            let data = response[0];
            var verify = await new Promise((resolve, reject) => {
               var respo =  speakeasy.totp.verify({
                    secret: data[0].Token,
                    encoding: 'ascii',
                    token: code
                });
               resolve(respo);
            });

            if (verify) {

                const info = await transporter.sendMail({
                    from: '"No Reply 👻" <matias.fonseca@fonlescompany.com>', // sender address
                    to: `${data[0].Email}`, // list of receivers
                    subject: "Nuevo Inicio de Sesión", // Subject line
                    text: "Nuevo Inicio de Sesión", // plain text body
                    html: `<h2>Nuevo Inicio de Sesión desde la siguiente IP pública: ${ip}</h2>`, // html body
                });
                console.log("enviado");
                res.statusCode = 200;
                return res.json({
                    "code": 200,
                    "data": "Autorizado",
                    "token": token
                });
            } else {

                res.statusCode = 404;
                return res.json({
                    "code": 404,
                    "data": "Error en el Código",
                    "token": ""

                });
            }
        } else {
            res.statusCode = 404;
            return res.json({
                "code": 404,
                "data": "Error en el Código",
                "token": ""

            });

        }






    } catch (error) {
        console.log(error);
        res.statusCode = 404;
        return res.json({
            "code": 404,
            "data": error,
            "token": ""
        })
    }
});

module.exports = router;


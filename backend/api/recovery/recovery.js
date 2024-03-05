const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const dbConnection = require("../../helpers/db/database");
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport(
  {
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "matias.fonseca@fonlescompany.com",
      pass: "MatiasFonles2023.",
    },
    logger: false,
    debug: false, // include SMTP traffic in the logs
  },
  {
    // sender info
    from: "No Reply <matias.fonseca@fonlescompany.com>",
  }
);
router.post("/password", async function (req, res) {
  try {
    const { email, message } = req.body;

    const info = await transporter.sendMail({
      from: '"No Reply 👻" <matias.fonseca@fonlescompany.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Respuesta de tu report", // Subject line
      text: "Respuesta de tu report", // plain text body
      html: `<h2>Respuesta de tu reporte</h2>${message}<hr/>`, // html body
    });
    console.log("enviado");
    res.statusCode = 200;
    return res.json({
      code: 200,
      data: "Enviado",
    });
  } catch (error) {
    res.statusCode = 404;
    return res.json({
      code: 404,
      data: error,
      token: "",
    });
  }
});
module.exports = router;

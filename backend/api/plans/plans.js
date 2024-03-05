const express = require("express");
const router = express.Router();
var jwt = require('jsonwebtoken');
const dbConnection = require("../../helpers/db/database");
const axios = require('axios');

router.put('/update', async function (req, res) {
    try {
        const { token, email,
            tipoIdentificacionComprador,
            razonSocialComprador,
            identificacionComprador,
            direccionComprador,
            telefono } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;
        var response = await connection.query(
            `UPDATE plans SET  name = 'Premium' WHERE id_user = '${id_user}';`);

        console.log(req.body);
        const url = 'http://127.0.0.1:1338/api/generate-billing';
        const body = {
            "email": email,
            "tipoIdentificacionComprador": tipoIdentificacionComprador,
            "razonSocialComprador": razonSocialComprador,
            "identificacionComprador": identificacionComprador,
            "direccionComprador": direccionComprador,
            "telefono": telefono,
            "productos": [{ "title": "Membrecía Prémium Uniandes Drive", "price": 10.01, "amount": 1 }],
            "formaPago": "16"
        };

        try {
            const responseFactura = await axios.post(url, body);
            console.log('Respuesta:', responseFactura.data);
            //RESPONSE
            res.json({
                "code": 200,
                "data": ""
            })
        } catch (error) {
            console.error('Error:', error);
            res.json({
                "code": 404,
                "data": error
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});
router.post('/get', async function (req, res) {
    try {
        const { token } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;
        let totalWeight = 0.0;

        var response = await connection.query(
            `SELECT * FROM plans WHERE id_user = '${id_user}';`);

        var result = await connection.query(
            `SELECT * FROM files WHERE id_user = '${id_user}';`);


        for (let index = 0; index < result[0].length; index++) {
            const element = result[0][index].weight;
            let numeroTemporal = parseFloat(result[0][index].weight);
            totalWeight +=numeroTemporal;
        }

        //RESPONSE
        res.json({
            "code": 200,
            "data": response[0],
            "weight":totalWeight.toFixed(2)
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


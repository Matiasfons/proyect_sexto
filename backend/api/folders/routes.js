const express = require("express");
const router = express.Router();
const mysql = require('mysql2');
var jwt = require('jsonwebtoken');
const dbConnection = require("../../helpers/db/database");

router.post('/create', async function (req, res) {
    try {
        const { token, nameFolder } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;
        var response = await connection.query(
            `INSERT INTO folders (id_user, name) VALUES ('${id_user}', '${nameFolder}')`);

        //RESPONSE
        res.json({
            "code": 200,
            "data": ""
        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});
router.post('/GET', async function (req, res) {
    try {
        const { token, nameFolder } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;

        var response = await connection.query(
            `SELECT * FROM folders WHERE id_user = '${id_user}';`);
        //RESPONSE
        res.json({
            "code": 200,
            "data": response[0]
        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});

router.delete('/delete/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const connection = await dbConnection();

        var response = await connection.query(
            `DELETE FROM files WHERE id_folder = '${id}';`);
        var responseDeleteFolder = await connection.query(
            `DELETE FROM folders WHERE Id = '${id}';`);

        //RESPONSE
        res.json({
            "code": 200,
            "data": "Eliminado"
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


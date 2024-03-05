const express = require("express");
const router = express.Router();
const multer = require('multer')
var jwt = require('jsonwebtoken');
const dbConnection = require("../../helpers/db/database");
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
        const fileName = file.originalname;
        cb(null, fileName);
    },
});

const upload = multer({ storage });

router.post('/uploads', upload.single('file'), async function (req, res, next) {
    try {
        const { token, folder, weight, nameA, nameB } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;
        
        if (folder == "") {
            var response = await connection.query(
                `INSERT INTO files (id_user,path,in_folder,id_folder,weight,name) VALUES ('${id_user}', '${req.file.path}','false','0','${weight}','${nameB}.${req.file.path.split('.').pop()}')`);
        }else{
            var response = await connection.query(
                `INSERT INTO files (id_user,path,in_folder,id_folder,weight,name) VALUES ('${id_user}', '${req.file.path}','true','${folder}','${weight}','${nameB}.${req.file.path.split('.').pop()}')`);
        }
        res.json({
            "code": 200,
            "data": "Creado"
        })

    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
})
router.post('/files', async function (req, res) {
    try {
        const { token } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;

        var response = await connection.query(`SELECT * FROM files WHERE id_user = '${id_user}' AND in_folder = 'false';`);

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
router.post('/files-id/:id', async function (req, res) {
    try {
        const {id} = req.params;
        const connection = await dbConnection();

        var response = await connection.query(`SELECT * FROM files WHERE id_folder = '${id}' AND in_folder = 'true';`);

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
            `DELETE FROM files WHERE Id = '${id}';`);

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


router.post('/document/create', async function (req, res, next) {
    try {
        const { token } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;

        var response = await connection.query(
            `INSERT INTO documents (name,data,id_user) VALUES ('Archivo sin nombre','', '${id_user}')`);

        res.json({
            "code": 200,
            "data": response[0].insertId.toString()
        })

    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
})

router.put('/update/document/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        const { name, data } = req.body;
        const connection = await dbConnection();

        if (name != "") {
            var response = await connection.query(
                `UPDATE documents SET name = '${name}', data = '${data}' WHERE Id = '${id}';`);

        } else {
            var response = await connection.query(
                `UPDATE documents SET  data = '${data}' WHERE Id = '${id}';`);
        }


        res.json({
            "code": 200,
            "data": "Creado"
        })

    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
})
router.get('/document/get/:id', async function (req, res) {
    try {
        const {id} = req.params;
        const connection = await dbConnection();
  
        var response = await connection.query(
            `SELECT * FROM documents WHERE Id = '${id}';`);
        //RESPONSE
        res.json({
            "code": 200,
            "data":response[0]
        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});

router.post('/documents/get', async function (req, res) {
    try {
        const { token } = req.body;
        const decoded = jwt.decode(token);
        const connection = await dbConnection();
        const id_user = decoded.id;
  
        var response = await connection.query(
            `SELECT * FROM documents WHERE id_user = '${id_user}';`);
        //RESPONSE
        res.json({
            "code": 200,
            "data":response[0]

        })
    } catch (error) {
        console.log(error);
        res.json({
            "code": 404,
            "data": error
        })
    }
});

router.delete('/document/delete/:id', async function (req, res) {
    try {
        const { id } = req.params;
        const connection = await dbConnection();

        var response = await connection.query(
            `DELETE FROM documents WHERE Id = '${id}';`);

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


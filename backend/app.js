const express = require('express');
const routesFolders = require('./api/folders/routes');
const routesRegister = require("./api/register/register");
const routesLogin = require("./api/login/login");
const routesDocument = require("./api/documents/documents");
const routesAccount = require("./api/account/account");
const routesRecovery = require("./api/recovery/recovery");
const routesPlans = require("./api/plans/plans");
const routesAuth = require("./api/auth/auth");
const routesAi = require("./api/ai/ai");

var cors = require('cors')
require('dotenv').config();
let port = process.env.SERVER_PORT;
//SERVER
const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use('/login', routesLogin);
app.use('/register', routesRegister);
app.use('/folders', routesFolders);

app.use('/documents', routesDocument);
app.use('/account', routesAccount);
app.use('/recovery', routesRecovery);
app.use('/plans', routesPlans);
app.use('/auth', routesAuth);
app.use('/ai', routesAi);


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

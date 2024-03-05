<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Página</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
    <link rel="stylesheet" href="./chat.css">
    <script type="module" src="https://md-block.verou.me/md-block.js"></script>

</head>

<body>
    <div class="chat-container">
        <div id="chat">
            <div id="mensajes">
            </div>
            <div class="input-container">
              
                <input type="text" id="mensaje" placeholder="Escribe tu mensaje aquí">
                <button id="enviar">Enviar</button>
            </div>
        </div>
    </div>
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <script src="./chat.js"></script>
</body>

</html>
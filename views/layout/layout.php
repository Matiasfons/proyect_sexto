<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="layout.iframe.css">

    <link rel="stylesheet" href="layout.css">

    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

    <title>Layout</title>
</head>

<body id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <box-icon name='menu-alt-left' id="header-toggle"></box-icon> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">InternetAI</span> </a>
                <div class="nav_list">
                    <!-- <a href="../info_web/index.php" class="nav_link active"> <box-icon name='dashboard' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Dashboard</span> </a> -->
                    <a href="../team/teams.php" class="nav_link active"> <box-icon name='group' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Equipo</span> </a>
                    <a href="../team/chat.php" class="nav_link"> <box-icon name='chat' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Chat AI</span> </a>

                </div>
            </div> <a href="#" class="nav_link"> <box-icon name='exit' color='#ffffff'></box-icon> <span class="nav_name">Cerrar Sesión</span> </a>
        </nav>
    </div>
    <div class="height-100 bg-light">
        <iframe src="../team/teams.php" frameborder="0"></iframe>

    </div>

    <script src="layout.menu.js"></script>
    <script src="layout.navigate.js"></script>

</body>


</html>
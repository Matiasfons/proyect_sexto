<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="layout.iframe.css">

    <link rel="stylesheet" href="layout.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Layout</title>
</head>

<body id="body-pd">
    <header class="header" id="header">
        <div id="name"></div>
        <button type="button" class="btn btn-secondary" id="popoverNotificaciones">
  Notificaciones
</button>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">InternetAI</span> </a>
                <div class="nav_list">
                    <!-- <a href="../info_web/index.php" class="nav_link active"> <box-icon name='dashboard' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Dashboard</span> </a> -->
                    <a id="team" href="../team/teams.php" class="nav_link active"> <box-icon name='group' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Equipo</span> </a>
                    <a href="../reports/reports.php" class="nav_link"> <box-icon name='report' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Reportes</span> </a>
                    <a href="../chat/chat.php" class="nav_link"> <box-icon name='chat' color='#ffffff' type='solid'></box-icon> <span class="nav_name">Chat AI</span> </a>

                </div>
            </div>
            <div onclick="handleClick();" class="nav_link">
                <box-icon name='exit' color='#ffffff'></box-icon>
                <span class="nav_name">Cerrar Sesión</span>
            </div>

        </nav>
    </div>
    <div class="height-100 bg-light">
        <iframe src="" frameborder="0"></iframe>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <script src="layout.menu.js"></script>
    <script src="layout.navigate.js"></script>

    <script>
        function handleClick() {
            sessionStorage.clear();
            window.location.href = "../login/login.php";

        }
    </script>

</body>


</html>
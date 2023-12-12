<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.styles.css">
    <title>Login</title>
</head>

<body>
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
            <div class="d-flex align-items-center justify-content-center w-100">
                <div class="row justify-content-center w-100">
                    <div class="col-md-8 col-lg-6 col-xxl-3">
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="./login.php" class="text-nowrap logo-img text-center d-block py-3 w-100">
                                    <!-- <img src="Public/assets/images/logos/dark-logo.svg" width="180" alt="">-->
                                </a>
                                <p class="text-center">Ingrese sus datos</p>
                                <form>

                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Correo</label>
                                        <input type="email" id="email" name="email" class="form-control" aria-describedby="emailHelp">
                                    </div>
                                    <div class="mb-4">
                                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                        <input type="password" id="password" name="password" class="form-control">
                                    </div>
                                    <button class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2" onclick="login(event)">Ingresar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="login.js"></script>
    <?php require_once('../html/script2.php') ?>

</body>

</html>
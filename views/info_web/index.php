<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('html/head.php') ?>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <?php require_once('html/menu.php') ?>
    </nav>
    <!-- Navigation End-->
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
            <?php require_once('html/header.php') ?>
        </div>
    </header>

    <!-- Information Section-->
    <?php require_once('html/information.php') ?>

    <!-- Contact Section-->
    <section class="page-section" id="contact">
        <div class="container">
        <?php require_once('html/contact.php') ?>
        </div>
    </section>
    <!-- Footer-->
    <footer class="footer text-center">
        <div class="container">
            <?php require_once('html/footer.php') ?>

        </div>
    </footer>


    <!-- Bootstrap core JS-->
    <?php require_once('html/script.php') ?>
</body>

</html>
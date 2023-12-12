<?php


function ProcedimientoConectar()
{
    $host = "localhost";  //192.168.100.103
    $user = "root";
    $pass = "fonles2023."; //esto es solo para MAMP  
    /**
     * XAMPP  password = '';
     */
    $dbname = "Sexto";
    $conexion = mysqli_connect($host, $user, $pass, $dbname);
    mysqli_query($conexion, "SET NAMES 'utf8'");

    if (!$conexion) {
        die("Error en la conexion con el servidor" . mysqli_error($conexion));
    }

    $db = mysqli_select_db($conexion, $dbname);

    if (!$db) die("Error en la seleccion de la base de datos" . mysqli_error($conexion));
    return $conexion;
}
?>
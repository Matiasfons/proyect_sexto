<?php
include 'conexion.model.php'; 


function loginModel( $username, $password)
{
    $conexion = ProcedimientoConectar();
    $cadena = "SELECT * FROM `usuarios`";
    $result = mysqli_query($conexion, $cadena);
    return $result;
}
?>
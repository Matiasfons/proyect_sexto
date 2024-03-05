<?php
include 'conexion.model.php';


function loginModel($correo)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "SELECT * FROM `users` WHERE `email`= '$correo'";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
function loginModelTeam($correo)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "SELECT * FROM `team` WHERE `email`= '$correo'";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
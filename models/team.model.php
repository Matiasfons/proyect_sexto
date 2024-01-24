<?php
include 'conexion.model.php';


function createTeamModel($names, $lastName, $identification, $email, $area, $password)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "INSERT INTO `team`(`names`, `lastNames`, `identification`, `email`, `area`, `password`) VALUES('$names','$lastName','$identification','$email','$area','$password')";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}

function deleteIntegrantModel($id)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "delete from team where Id=$id";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
function getAllTeam()
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "SELECT * FROM `team`";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
<?php
include 'conexion.model.php';


function createTeamModel($names, $lastName, $identification, $email, $area, $password)
{
    try {
        $conexion = ProcedimientoConectar();
        $hashedIdentification = password_hash($identification, PASSWORD_DEFAULT);

        $cadena = "INSERT INTO `team`(`names`, `lastNames`, `identification`, `email`, `area`, `password`) VALUES('$names','$lastName','$identification','$email','$area','$hashedIdentification')";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
function updateTeamModel($Id, $names, $lastName, $identification, $email, $area, $password)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "UPDATE `team` SET `names`='$names', `lastNames`='$lastName', `identification`='$identification', `email`='$email', `area`='$area', `password`='$password' WHERE `Id`='$Id'";
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
function getTeamById($teamId)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "SELECT * FROM `team` WHERE `Id`='$teamId'";
        $result = mysqli_query($conexion, $cadena);

        // Verificar si se obtuvieron resultados
        if ($result) {
            // Obtener el registro como un array asociativo
            $teamData = mysqli_fetch_assoc($result);
            return $teamData;
        } else {
            return null; // No se encontraron resultados
        }
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        $conexion->close();  // Descomentar esta línea
    }
}

<?php
include 'conexion.model.php';


function createContactModel($identification, $names, $lastName, $address, $phone, $email, $area, $message)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "INSERT INTO `reportes`(`cedula`,`nombre`,`apellido`,`direccion`,`telefono`,`email`,`mensaje`,`respuesta`, `area` ) VALUES('$identification','$names','$lastName','$address','$phone','$email','$message',' ','$area')";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}
function updateReportModel($Id, $response,$idUser)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "UPDATE `reportes` SET `respuesta`='$response', `atendido`='1', `id_team`='30' WHERE `id_reporte`='$Id'";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}

function getAllReports()
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "SELECT * FROM `reportes`";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}

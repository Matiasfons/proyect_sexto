<?php
include 'conexion.model.php';


function createContactModel($identification, $names, $lastName, $address, $phone, $email, $area, $message)
{
    try {
        $conexion = ProcedimientoConectar();
        $cadena = "INSERT INTO `reportes`(`cedula`,`nombre`,`apellido`,`direccion`,`telefono`,`email`,`mensaje`,`area` ) VALUES('$identification','$names','$lastName','$address','$phone','$email','$message','$area')";
        $result = mysqli_query($conexion, $cadena);
        return $result;
    } catch (\Throwable $th) {
        return $th->getMessage();
    } finally {
        // $conexion->close();
    }
}

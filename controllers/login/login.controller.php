<?php

include '../../models/login.model.php'; 

switch ($_SERVER['REQUEST_METHOD'] ) {
    case 'POST':
        $datos = array();
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $correo = $data['username'];
        $password = $data['password'];    
        $result = loginModel($correo);
        $respuesta = mysqli_fetch_assoc($result);
        if (is_array($respuesta) and count($respuesta) > 0) { 
            session_start();
            if ($password == $respuesta["password"]) { 
                $_SESSION['names']  = $respuesta["names"];
                $_SESSION['lastName'] = $respuesta["lastName"];
                $_SESSION['email']    = $respuesta["email"];
                $_SESSION['password']       = $respuesta["password"];
                $_SESSION['UserId'] = $respuesta["UserId"];
                $_SESSION['Identification'] = $respuesta["Identification"];

                echo json_encode(['success' => true, 'data'=> 'Ok']);

            } else {
                echo json_encode(['success' => false, 'data'=> 'Contraseña Incorrecta']);
            }
        } else {
            echo json_encode(['success' => false, 'data'=> 'No se encontro el usuario']);
        }
        break;
    
    default:
      
        break;
}
?>


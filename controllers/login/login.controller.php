<?php

include '../../models/login.model.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $datos = array();
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $correo = $data['username'];
        $password = $data['password'];
        $admin = $data['admin'];
        if ($admin) {
            $result = loginModel($correo);
            $respuesta = mysqli_fetch_assoc($result);

            if (is_array($respuesta) and count($respuesta) > 0) {
                session_start();
                if ($password == $respuesta["password"]) {
                    $secretKey = '123456789'; // Reemplaza con tu clave secreta
                    $header = base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
                    $payload = base64_encode(json_encode($respuesta));
                    $signature = base64_encode(hash_hmac('sha256', "$header.$payload", $secretKey, true));
                    $_SESSION['names']  = $respuesta["names"];
                    $_SESSION['lastName'] = $respuesta["lastName"];
                    $_SESSION['email']    = $respuesta["email"];
                    $_SESSION['password']       = $respuesta["password"];
                    $_SESSION['UserId'] = $respuesta["UserId"];
                    $_SESSION['Identification'] = $respuesta["Identification"];
                    // $_SESSION['area'] = $respuesta["area"];

                    echo json_encode(['success' => true, 'data' => "$header.$payload.$signature", 'name'=>$respuesta["names"], 'id'=>$respuesta["UserId"]]);
                } else {
                    echo json_encode(['success' => false, 'data' => 'Contraseña Incorrecta']);
                }
            } else {
                echo json_encode(['success' => false, 'data' => 'No se encontro el usuario']);
            }
        } else {
            $result = loginModelTeam($correo);
            $respuesta = mysqli_fetch_assoc($result);

            if (is_array($respuesta) and count($respuesta) > 0) {
                session_start();
                if (password_verify($password, $respuesta["password"]) ) {
                    $secretKey = '123456789'; // Reemplaza con tu clave secreta
                    $header = base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
                    $payload = base64_encode(json_encode($respuesta));
                    $signature = base64_encode(hash_hmac('sha256', "$header.$payload", $secretKey, true));
                    $_SESSION['names']  = $respuesta["names"];
                    $_SESSION['lastName'] = $respuesta["lastNames"];
                    $_SESSION['email']    = $respuesta["email"];
                    $_SESSION['password']       = $respuesta["password"];
                    $_SESSION['Id'] = $respuesta["Id"];
                    $_SESSION['identification'] = $respuesta["identification"];
                    $_SESSION['area'] = $respuesta["area"];

                    echo json_encode(['success' => true, 'data' => "$header.$payload.$signature", 'role'=> $respuesta["area"], 'name'=>$respuesta["names"], 'id'=>$respuesta["Id"]]);
                } else {
                    echo json_encode(['success' => false, 'data' => 'Contraseña Incorrecta']);
                }
            } else {
                echo json_encode(['success' => false, 'data' => 'No se encontro el usuario']);
            }
        }

        break;

    default:

        break;
}

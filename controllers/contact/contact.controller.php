<?php

include '../../models/contact.model.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        try {
            $datos = array();
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
            $identification = $data['identification'];
            $names = $data['names'];
            $lastName = $data['lastName'];
            $address = $data['address'];
            $phone = $data['phone'];
            $email = $data['email'];
            $area = $data['area'];
            $message = $data['message'];

            $result = createContactModel($identification, $names, $lastName, $address, $phone, $email, $area, $message);
            echo json_encode(['success' => true, 'data' => $result]);
        } catch (\Throwable $th) {
            echo json_encode(['success' => false, 'data' => 'Error del Servidor']);
        }
        break;
    case 'GET':
        try {
            $type = isset($_GET['type']) ? $_GET['type'] : null;
            if ($type == "all") {
                $result = getAllReports();
                while ($fila = mysqli_fetch_assoc($result)) { //recorro el arreglo de datos
                    $todos[] = $fila;
                }
                echo json_encode(['success' => true, 'data' => $todos]);
            } else {
                echo json_encode(['success' => true, 'data' => 'SIN TYPE']);
            }
        } catch (\Throwable $th) {
            echo json_encode(['success' => false, 'data' => 'Error del Servidor']);
        }
        break;
    case 'UPDATE':
        try {
            $datos = array();
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
            $Id = $data['Id'];
            $response = $data['response'];
            $idUser = $data['idUser'];

            $result = updateReportModel($Id, $response,$idUser);
            echo json_encode(['success' => true, 'data' => 'Ok']);
        } catch (\Throwable $th) {
            echo json_encode(['success' => false, 'data' => 'Error del Servidor']);
        }
        break;
    default:

        break;
}

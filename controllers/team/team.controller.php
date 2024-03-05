<?php

include '../../models/team.model.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        try {
            $datos = array();
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
            $names = $data['names'];
            $lastName = $data['lastName'];
            $identification = $data['identification'];
            $email = $data['email'];
            $area = $data['area'];
            $password = "";
            $result = createTeamModel($names, $lastName, $identification, $email, $area, $password);
            echo json_encode(['success' => true, 'data' => 'Ok']);
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
            $names = $data['names'];
            $lastName = $data['lastName'];
            $identification = $data['identification'];
            $email = $data['email'];
            $area = $data['area'];
            $password = "";
            $result = updateTeamModel($Id, $names, $lastName, $identification, $email, $area, $password);
            echo json_encode(['success' => true, 'data' => 'Ok']);
        } catch (\Throwable $th) {
            echo json_encode(['success' => false, 'data' => 'Error del Servidor']);
        }
        break;
    case 'GET':
        try {
            $type = isset($_GET['type']) ? $_GET['type'] : null;
            if ($type == "all") {
                $result = getAllTeam();
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
    case 'DELETE':
        try {
            $datos = array();
            $json = file_get_contents('php://input');
            $data = json_decode($json, true);
            $id = $data['Id'];
            $result = deleteIntegrantModel($id);
            echo json_encode(['success' => true, 'data' => 'Ok']);
        } catch (\Throwable $th) {
            echo json_encode(['success' => false, 'data' => 'Error del Servidor']);
        }
        break;

    default:

        break;
}


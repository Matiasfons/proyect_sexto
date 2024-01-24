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
    default:

        break;
}

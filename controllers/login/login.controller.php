<?php

include '../../models/login.model.php'; 

switch ($_SERVER['REQUEST_METHOD'] ) {
    case 'POST':
        
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        $username = $data['username'];
        $password = $data['password'];    
        // if ($username === $validUsername && $password === $validPassword) {
        //     echo json_encode(['success' => true]);
        // } else {
        //     echo json_encode(['success' => false]);
        // }
        $result = loginModel($username, $password);
        while ($fila = mysqli_fetch_assoc($result)) {
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    
    default:
      
        break;
}
?>


<?php
    require_once 'jwt.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');

    $request = $_SERVER["REQUEST_METHOD"];

    function sendRoleFromToken($token) {
        $decoded_token = JWTHandler::validateToken($token);

        $response = [];
        if (!$decoded_token) {
            $response["role"] = false;
            echo json_encode($response);
            return;
        }
        
        $data = $decoded_token;
        $response["role"] = $data["role"];
        echo json_encode($response);
        http_response_code(200);
    }

    switch ($request) {
        case "POST":
            $data = json_decode(file_get_contents("php://input"));
            sendRoleFromToken($data->token);
            break;
        default:
            echo json_encode(["message"=> "Invalid request method"]);
            break;
    }

?>
<?php
    require_once '../config/database.php';
    require_once 'jwt.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');

    $db = new Database;
    $conn = $db->connect();
    $request = $_SERVER['REQUEST_METHOD'];

    function getLoginAdmin($data) {
        global $conn;
        $role = "admin";
        $login = $data->login;
        $password = $data->password;
    
        if (empty($login)) {
            echo json_encode(["message" => "Missing data"]);
            http_response_code(400);
            return;
        }
    
        $query = "SELECT * FROM admin WHERE login = :login";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':login', $login);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
        $response = [];
        if (!$result) {
            $response["message"] = "No data found";
            $response["token"] = false;
            echo json_encode($response);
            return;
        }
        
        if (!password_verify($password, $result["password"])) {
            $response["message"] = "Incorrect password";
            $response["token"] = false;
            echo json_encode($response);
            return;
        }

        $response["token"] = JWTHandler::generateToken($result["login"], $role);
        echo json_encode($response);
        http_response_code(200);
    }

    switch ($request) {
        case "POST":
            $data = json_decode(file_get_contents("php://input"));
            getLoginAdmin($data);
            break;
        default:
            echo json_encode(["message"=> "Invalid request method"]);
            break;
    }
?>
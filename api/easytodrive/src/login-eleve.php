<?php
    require_once '../config/database.php';
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');


    $db = new Database;
    $conn = $db->connect();
    $request = $_SERVER['REQUEST_METHOD'];

    function getLoginEleve($data) {
        global $conn;
        $login = $data->login;
        $password = $data->password;
    
        if (empty($login)) {
            echo json_encode(["message" => "Missing data"]);
            http_response_code(400);
            return;
        }
    
        $query = "SELECT * FROM eleve WHERE login = :login";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':login', $login);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
        $response = [];
        if (!$result) {
            $response["message"] = "No data found";
            $response["token"] = "";
            echo json_encode($response);
            http_response_code(400);
            return;
        }
        
        if (!password_verify($password, $result["password"])) {
            $response["message"] = "Incorrect password";
            $response["token"] = "";
            echo json_encode($response);
            http_response_code(400);
            return;
        }

        $response["eleve"] = [
            "eleve_id" => $result["eleve_id"],
            "autoecole_id" => $result["autoecole_id"],
            "login" => $result["login"],
            "password" => $result["password"],
            "naissance" => $result["naissance"],
            "rue" => $result["rue"],
            "cp" => $result["cp"],
            "ville" => $result["ville"],
            "date_inscription" => $result["date_inscription"],
            "neph" => $result["neph"],
            "note_etg" => $result["note_etg"],
            "validation_etg" => $result["validation_etg"]
        ];

        $response["token"] = hash("sha256", $result["login"]);
        echo json_encode($response);
        http_response_code(200);
    }

    switch ($request) {
        case "POST":
            $data = json_decode(file_get_contents("php://input"));
            getLoginEleve($data);
            break;
        default:
            echo json_encode(["message"=> "Invalid request method"]);
            break;
    }
?>
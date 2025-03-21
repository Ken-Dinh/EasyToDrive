<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getAutoEcoles() {
        global $conn;
        $query = "SELECT * FROM autoecole";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["autoecole"] = [];
        foreach ($result as $row) {
           $item = [
                "autoecole_id" => $row["autoecole_id"],
                "nom" => $row["nom"],
                "password" => $row["password"]
            ];
            array_push($response["autoecole"], $item);
        }

        echo json_encode($response);
        http_response_code(200);
    }

    switch ($request) {
        case "GET":
            getAutoEcoles();
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
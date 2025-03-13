<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getEleves() {
        global $conn;
        $query = "SELECT * FROM eleve";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }

    function postEleve($data) {
        global $conn;

        if (!isset($data["autoecole_id"],
                    $data["login"],
                    $data["password"],
                    $data["naissance"],
                    $data["rue"],
                    $data["cp"],
                    $data["ville"],
                    $data["date_inscription"],
                    $data["neph"],
                    $data["note_etg"],
                    $data["note_circulation"],
                    $data["validation_etg"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }
    }

    switch ($request) {
        case "GET":
            getEleves();
            break;
        case "POST":
            echo json_encode(["message" => "POST"]);
            break;
        case "PUT":
            echo json_encode(["message" => "PUT"]);
            break;
        case "DELETE":
            echo json_encode(["message" => "DELETE"]);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
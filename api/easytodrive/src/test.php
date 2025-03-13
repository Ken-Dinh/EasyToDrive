<?php
    require_once '../config/database.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();

    $request = $_SERVER["REQUEST_METHOD"];

    switch ($request) {
        case "GET":
            echo json_encode(["message" => "GET"]);
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
            echo json_encode(["message"=> "Invalid request method"]);
    }
?>
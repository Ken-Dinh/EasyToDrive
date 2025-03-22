<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getSimulations() {
        global $conn;
        $query = "SELECT * FROM simulation";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["simulation"] = [];
        foreach ($result as $row) {
           $item = [
                "simulation_id" => $row["simulation_id"],
                "examen_id" => $row["examen_id"],
                "date" => $row["date"],
                "validation" => $row["validation"],
            ];
            array_push($response["simulation"], $item);
        }

        echo json_encode($response);
        http_response_code(200);
    }

    function postSimulation($data) {
        global $conn;

        if (empty($data["examen_id"]) ||
            empty($data["date"]) ||
            !isset($data["validation"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "INSERT INTO simulation SET examen_id = :examen_id,
                                        date = :date,
                                        validation = :validation";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":validation", $data["validation"], PDO::PARAM_BOOL);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Simulation ajouté avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de l'ajout du simulation"]);
        }
    }

    switch ($request) {
        case "GET":
            getSimulations();
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postSimulation($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
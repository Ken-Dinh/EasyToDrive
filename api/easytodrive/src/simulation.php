<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getSimulationById($id) {
        global $conn;
        $query = "SELECT * FROM simulation WHERE simulation_id = :simulation_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":simulation_id", $id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["simulation"] = [
                "simulation_id" => $result["simulation_id"],
                "examen_id" => $result["examen_id"],
                "date" => $result["date"],
                "validation" => $result["validation"]
            ];
            
        echo json_encode($response);
        http_response_code(200);
    }

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

    function putSimulation($data) {
        global $conn;

        if (empty($data["simulation_id"]) ||
            empty($data["examen_id"]) ||
            empty($data["date"]) ||
            !isset($data["validation"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM simulation WHERE simulation_id = :simulation_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":simulation_id", $data["simulation_id"], PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "La simulation n'existe pas"]);
            return;
        }
        
        $query = "UPDATE simulation SET examen_id = :examen_id,
                                        date = :date,
                                        validation = :validation
                                        WHERE simulation_id = :simulation_id";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":simulation_id", $data["simulation_id"], PDO::PARAM_INT);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":validation", $data["validation"], PDO::PARAM_BOOL);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Simulation modifié avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la modification de la simulation"]);
        }
    }

    switch ($request) {
        case "GET":
            $id = isset($_GET["id"]) && is_int((int)$_GET["id"]) ? $_GET["id"] : false;
            if (!$id) {
                getSimulations();
                break;
            }
            getSimulationById($id );
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postSimulation($data);
            break;
        case "PUT":
            $data = json_decode(file_get_contents("php://input"), true);
            putSimulation($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }
?>
<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];
    $data = json_decode(file_get_contents("php://input"), true);
    function deleteEleve($id) {
        global $conn;

        if (empty($id)) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM eleve WHERE eleve_id = :eleve_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":eleve_id", $id, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "L'élève n'existe pas"]);
            return;
        }

        $query = "DELETE FROM avis WHERE eleve_id = :eleve_id;
                    DELETE FROM eleve_examen WHERE eleve_id = :eleve_id;
                    DELETE FROM eleve WHERE eleve_id = :eleve_id;";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":eleve_id", $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Elève supprimé avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la suppression de l'élève"]);
        }
    }

    function deleteExamen($id) {
        global $conn;

        if (empty($id)) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM examen WHERE examen_id = :examen_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $id, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "L'examen n'existe pas"]);
            return;
        }

        $query = "DELETE FROM test WHERE examen_id = :examen_id;
                    DELETE FROM eleve_examen WHERE examen_id = :examen_id;
                    DELETE FROM simulation WHERE examen_id = :examen_id;
                    DELETE FROM examen WHERE examen_id = :examen_id;";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Examen supprimé avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la suppression de l'examen"]);
        }
    }

    function deleteTest($id) {
        global $conn;

        if (empty($id)) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM test WHERE test_id = :test_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":test_id", $id, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "Le test n'existe pas"]);
            return;
        }

        $query = "DELETE FROM test WHERE test_id = :test_id;";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":test_id", $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Test supprimé avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la suppression du test"]);
        }
    }

    function deleteSimulation($id) {
        global $conn;

        if (empty($id)) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM simulation WHERE simulation_id = :simulation_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":simulation_id", $id, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "La simulation n'existe pas"]);
            return;
        }

        $query = "DELETE FROM simulation WHERE simulation_id = :simulation_id;";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":simulation_id", $id, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Simulation supprimé avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la suppression da la simulation"]);
        }
    }

    if  ($request != "DELETE") {
        echo json_encode(["message" => "Invalid request method"]);
        exit;
    }
            
    switch ($data["table"]) {
        case "eleve":
            deleteEleve($data["id"]);
            break;
        case "examen":
            deleteExamen($data["id"]);
            break;
        case "test":
            deleteTest($data["id"]);
            break;
        case "simulation";
            deleteSimulation($data["id"]);
            break;
        default:
            echo json_encode(["message" => "Table invalide"]);
            break;
    };


?>
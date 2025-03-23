<?php
    require_once "../config/database.php";
    require_once "jwt.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];
    function getEleveResult($user) {
        global $conn;

        if (empty($user)) {
            echo json_encode(["message" => "Utilisateur inconnu"]);
            return;
        }
        
        $response = [];
        $query = "SELECT *
            FROM examen e
            JOIN eleve_examen ea ON e.examen_id = ea.examen_id
            WHERE ea.eleve_id = (SELECT eleve_id FROM eleve WHERE login = :login);";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":login", $user, PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response["examen"] = [];
        foreach ($result as $row) {
           $item = [
                "examen_id" => $row["examen_id"],
                "date" => $row["date"],
                "score" => $row["score"]
            ];
            array_push($response["examen"], $item);
        }

        $query = "SELECT *
            FROM test t
            JOIN examen e ON t.examen_id = e.examen_id
            WHERE e.examen_id IN (
            SELECT e.examen_id
            FROM examen e
            JOIN eleve_examen ea ON e.examen_id = ea.examen_id
            WHERE ea.eleve_id = (SELECT eleve_id FROM eleve WHERE login = :login));";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":login", $user, PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $response["test"] = [];
        foreach ($result as $row) {
           $item = [
                "test_id" => $row["test_id"],
                "examen_id" => $row["examen_id"],
                "theme" => $row["theme"],
                "date" => $row["date"],
                "score" => $row["score"]
            ];
            array_push($response["test"], $item);
        }

        $query ="SELECT *
            FROM simulation s
            JOIN examen e ON s.examen_id = e.examen_id
            WHERE e.examen_id IN (
            SELECT e.examen_id
            FROM examen e
            JOIN eleve_examen ea ON e.examen_id = ea.examen_id
            WHERE ea.eleve_id = (SELECT eleve_id FROM eleve WHERE login = :login));";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":login", $user, PDO::PARAM_STR);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

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

    switch ($request) {
        case "POST":
            $data = file_get_contents("php://input");
            $decoded_data = JWTHandler::validateToken($data);
            $user = $decoded_data["user"];
            getEleveResult($user);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
            break;
    }

?>
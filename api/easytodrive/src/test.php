<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getTestById($id) {
        global $conn;
        $query = "SELECT * FROM test WHERE test_id = :test_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":test_id", $id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["test"] = [
                "test_id" => $result["test_id"],
                "examen_id" => $result["examen_id"],
                "theme" => $result["theme"],
                "date" => $result["date"],
                "score" => $result["score"]
            ];
            
        echo json_encode($response);
        http_response_code(200);
    }

    function getTests() {
        global $conn;
        $query = "SELECT * FROM test";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response = [];
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

        echo json_encode($response);
        http_response_code(200);
    }

    function postTest($data) {
        global $conn;

        if (empty($data["examen_id"]) ||
            empty($data["theme"]) ||
            empty($data["date"]) ||
            empty($data["score"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "INSERT INTO test SET examen_id = :examen_id,
                                        theme = :theme,
                                        date = :date,
                                        score = :score";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->bindParam(":theme", $data["theme"], PDO::PARAM_STR);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":score", $data["score"], PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Test ajouté avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de l'ajout de l'test"]);
        }

    }

    function putTest($data) {
        global $conn;

        if (empty($data["test_id"]) ||
            empty($data["examen_id"]) ||
            empty($data["theme"]) ||
            empty($data["date"]) ||
            empty($data["score"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM test WHERE test_id = :test_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":test_id", $data["test_id"], PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "Le test n'existe pas"]);
            return;
        }
        
        $query = "UPDATE test SET examen_id = :examen_id,
                                    theme = :theme,
                                    date = :date,
                                    score = :score
                                    WHERE test_id = :test_id";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":test_id", $data["test_id"], PDO::PARAM_INT);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->bindParam(":theme", $data["theme"], PDO::PARAM_STR);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":score", $data["score"], PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Test modifié avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la modification du test"]);
        }
    }

    switch ($request) {
        case "GET":
            $id = isset($_GET["id"]) && is_int((int)$_GET["id"]) ? $_GET["id"] : false;
            if (!$id) {
                getTests();
                break;
            }
            getTestById($id);
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postTest($data);
            break;
        case "PUT":
            $data = json_decode(file_get_contents("php://input"), true);
            putTest($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
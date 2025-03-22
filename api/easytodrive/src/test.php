<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

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

    switch ($request) {
        case "GET":
            getTests();
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postTest($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
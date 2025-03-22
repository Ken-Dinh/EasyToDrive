<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getExamens() {
        global $conn;
        $query = "SELECT * FROM examen";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["examen"] = [];
        foreach ($result as $row) {
           $item = [
                "examen_id" => $row["examen_id"],
                "date" => $row["date"],
                "score" => $row["score"]
            ];
            array_push($response["examen"], $item);
        }

        echo json_encode($response);
        http_response_code(200);
    }

    function postExamen($data) {
        global $conn;

        if (empty($data["date"]) ||
            empty($data["score"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "INSERT INTO examen SET date = :date,
                                        score = :score";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":score", $data["score"], PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Examen ajouté avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de l'ajout de l'examen"]);
        }

    }

    switch ($request) {
        case "GET":
            getExamens();
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postExamen($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getExamenById($id) {
        global $conn;
        $query = "SELECT * FROM examen WHERE examen_id = :examen_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["examen"] = [
                "examen_id" => $result["examen_id"],
                "date" => $result["date"],
                "score" => $result["score"]
            ];
            
        echo json_encode($response);
        http_response_code(200);
    }

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

    function putExamen($data) {
        global $conn;

        if (empty($data["examen_id"]) ||
            empty($data["date"]) ||
            empty($data["score"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "SELECT * FROM examen WHERE examen_id = :examen_id";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            echo json_encode(["message" => "L'examen n'existe pas"]);
            return;
        }
        
        $query = "UPDATE examen SET date = :date,
                                        score = :score
                                        WHERE examen_id = :examen_id";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":examen_id", $data["examen_id"], PDO::PARAM_INT);
        $stmt->bindParam(":date", $data["date"], PDO::PARAM_STR);
        $stmt->bindParam(":score", $data["score"], PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Examen modifié avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de la modification de l'examen"]);
        }
    }

    switch ($request) {
        case "GET":
            $id = isset($_GET["id"]) && is_int((int)$_GET["id"]) ? $_GET["id"] : false;
            if (!$id) {
                getExamens();
                break;
            }
            getExamenById($id);
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postExamen($data);
            break;
        case "PUT":
            $data = json_decode(file_get_contents("php://input"), true);
            putExamen($data);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
            break;
    }

?>
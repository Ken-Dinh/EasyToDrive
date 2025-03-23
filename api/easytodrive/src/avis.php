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

    function getAvis() {
        global $conn;
        $query = "SELECT * FROM avis";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $response = [];
        $response["avis"] = [];
        foreach ($result as $row) {
           $item = [
                "avis_id" => $row["avis_id"],
                "eleve_id" => $row["eleve_id"],
                "contenu" => $row["contenu"],
                "date_publication" => $row["date_publication"]
            ];
            array_push($response["avis"], $item);
        }

        echo json_encode($response);
        http_response_code(200);
    }

    function postAvis($data, $user) {
        global $conn;

        if (empty($data["contenu"]) ||
            empty($data["date_publication"]) ||
            empty($user)) {
            echo json_encode(["message" => "Champs vide"]);
            return;
            }

        $query = "INSERT INTO avis SET eleve_id = (SELECT eleve_id FROM eleve WHERE login = :login),
                                        contenu = :contenu,
                                        date_publication = :date_publication;";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(":login", $user, PDO::PARAM_STR);
        $stmt->bindParam(":contenu", $data["contenu"], PDO::PARAM_STR);
        $stmt->bindParam(":date_publication", $data["date_publication"], PDO::PARAM_STR);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Avis ajouté avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de l'ajout de l'avis"]);
        }
    }

    switch ($request) {
        case "GET":
            getAvis();
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            $decoded_data = JWTHandler::validateToken($data["token"]);
            $user = $decoded_data["user"];
            postAvis($data["avis"], $user);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
            break;
    }

?>
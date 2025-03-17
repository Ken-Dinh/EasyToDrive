<?php
    require_once "../config/database.php";
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("content-type: application/json");
    header("Access-Control-Allow-Methods: *");

    $db = new Database();
    $conn = $db->connect();
    $request = $_SERVER["REQUEST_METHOD"];

    function getEleves() {
        global $conn;
        $query = "SELECT * FROM eleve";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $data = [];
        $data["eleve"] = [];
        foreach ($result as $row) {
           $item = [
                "eleve_id" => $row["eleve_id"],
                "autoecole_id" => $row["autoecole_id"],
                "login" => $row["login"],
                "password" => $row["password"],
                "naissance" => $row["naissance"],
                "rue" => $row["rue"],
                "cp" => $row["cp"],
                "ville" => $row["ville"],
                "date_inscription" => $row["date_inscription"],
                "neph" => $row["neph"],
                "note_etg" => $row["note_etg"],
                "validation_etg" => $row["validation_etg"]
            ];
            array_push($data["eleve"], $item);
        }

        echo json_encode($data);
    }

    function postEleve($data) {
        global $conn;

        if (!isset($data["autoecole_id"],
                    $data["login"],
                    $data["password"],
                    $data["naissance"],
                    $data["rue"],
                    $data["cp"],
                    $data["ville"],
                    $data["date_inscription"],
                    $data["neph"],
                    $data["note_etg"],
                    $data["validation_etg"])) {
            echo json_encode(["message" => "Missing data"]);
            return;
        }

        $query = "INSERT INTO eleve SET autoecole_id = :autoecole_id,
                                        login = :login,
                                        password = :password,
                                        naissance = :naissance,
                                        rue = :rue,
                                        cp = :cp,
                                        ville = :ville,
                                        date_inscription = :date_inscription,
                                        neph = :neph,
                                        note_etg = :note_etg,
                                        validation_etg = :validation_etg";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(":autoecole_id", $data["autoecole_id"]);
        $stmt->bindParam(":login", $data["login"]);
        $stmt->bindParam(":password", $data["password"]);
        $stmt->bindParam(":naissance", $data["naissance"]);
        $stmt->bindParam(":rue", $data["rue"]);
        $stmt->bindParam(":cp", $data["cp"]);
        $stmt->bindParam(":ville", $data["ville"]);
        $stmt->bindParam(":date_inscription", $data["date_inscription"]);
        $stmt->bindParam(":neph", $data["neph"]);
        $stmt->bindParam(":note_etg", $data["note_etg"]);
        $stmt->bindParam(":validation_etg", $data["validation_etg"]);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Eleve ajouté avec succès"]);
        } else {
            echo json_encode(["message" => "Erreur lors de l'ajout de l'élève"]);
        }

    }

    switch ($request) {
        case "GET":
            getEleves();
            break;
        case "POST":
            $data = json_decode(file_get_contents("php://input"), true);
            postEleve($data);
            break;
        case "PUT":
            echo json_encode(["message" => "PUT"]);
            break;
        case "DELETE":
            echo json_encode(["message" => "DELETE"]);
            break;
        default:
            echo json_encode(["message" => "Invalid request method"]);
    }

?>
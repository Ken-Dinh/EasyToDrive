<?php
    class Database {
        private static $host = "localhost";
        private static $user = "root";
        private static $password = "";
        private static $db_name = "easytodrive";
        private $conn = null;

        public function connect() {
            try {
                $this->conn = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$db_name, self::$user, self::$password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                // echo json_encode(["message" => $e->getMessage()]);
                http_response_code(400);
            }
            return $this->conn;
        }
    }
?>
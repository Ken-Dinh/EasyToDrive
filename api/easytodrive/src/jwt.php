<?php
    require '../vendor/autoload.php';
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    class JWTHandler {
        private static $secret_key = "RWFzeVRvRHJpdmU=";
        private static $algorithm = 'HS256';

        public static function generateToken($user_login, $role) {
            $issuedAt = time();
            $payload = [
            'iat' => $issuedAt,
            'user' => $user_login,
            'role' => $role
            ];
            return JWT::encode($payload, self::$secret_key, self::$algorithm);
        }

        public static function validateToken($token) {
            try {
                $decoded = JWT::decode($token, new Key(self::$secret_key, self::$algorithm));
                return $decoded;
            } catch (Exception $e) {
                // echo json_encode(["message" => $e->getMessage()]);
                return false;
            }
        }
    }
?>
<?php
session_start();
$host = 'localhost';
$dbname = 'pfa';
$dbUsername = 'root'; 
$dbPassword = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbUsername, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connexion échouée : " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM userform WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['user_name'] = $user['full_name'];
        
        // Successful login -> go to accueil.html
        header('Location: acceuil.html');
        exit();
    } else {
        // Wrong password or email -> go back to login.php
        echo "<script>alert('Email ou mot de passe incorrect.'); window.location.href='login.php';</script>";
        exit();
    }
}
?>


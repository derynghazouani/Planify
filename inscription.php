<?php

$host = 'localhost';
$dbname = 'pfa';
$dbUsername = 'root'; 
$dbPassword = 'root';

try {
    $pdo = new PDO("mysql:host=$host;port=3306;dbname=$dbname;charset=utf8", $dbUsername, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connexion échouée : " . $e->getMessage());
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullname = htmlspecialchars($_POST['fullName']); 
    $email = htmlspecialchars($_POST['email']);
    $username = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];


    $checkEmail = $pdo->prepare("SELECT * FROM userform WHERE email = ?");
    $checkEmail->execute([$email]);

    if ($checkEmail->rowCount() > 0) {
        echo "<script>alert('Cette adresse e-mail est déjà utilisée.'); window.history.back();</script>";
        exit;
    }


    if ($password !== $confirmPassword) {
        echo "<script>alert('Les mots de passe ne correspondent pas.'); window.history.back();</script>";
        exit;
    }

    // Hash du mot de passe
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insertion dans la base
    $sql = "INSERT INTO userform (fullname, email, username, password) VALUES (?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$fullname, $email, $username, $hashedPassword]);

    echo "<script>alert('Inscription réussie !'); window.location.href='acceuil.html';</script>";
}
?>

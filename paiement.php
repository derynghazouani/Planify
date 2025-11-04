<?php
session_start();

// Connexion à la base de données
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

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nomcomplet = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $adresse = htmlspecialchars($_POST['address']);
    $numerocarte = htmlspecialchars($_POST['numcarte']);
    $nomtut = htmlspecialchars($_POST['nomtut']);
    $moisdexpiration = htmlspecialchars($_POST['moisdexp']);
    $aneeexp = htmlspecialchars($_POST['anneedexp']);
    $CVV = htmlspecialchars($_POST['cvv']);
    $gouv = htmlspecialchars($_POST['gouv']);
    $cite = htmlspecialchars($_POST['cite']);
    $codepostal = htmlspecialchars($_POST['codep']);

    // Insertion en base
    $sql = "INSERT INTO paiement (nomcomplet, email, adresse, numerocarte, nomtut, moisdexpiration, aneeexp, CVV, gouv, cite, codepostal)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $nomcomplet, $email, $adresse, $numerocarte, $nomtut,
        $moisdexpiration, $aneeexp, $CVV, $gouv, $cite, $codepostal
    ]);

  
    ?>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Reçu de Paiement</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
            .receipt { background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            h1 { text-align: center; color: green; }
            .details { margin-top: 20px; }
            .details p { margin: 8px 0; }
        </style>
    </head>
    <body>
        <div class="receipt">
            <h1>Reçu de Paiement</h1>
            <div class="details">
                <p><strong>Nom complet :</strong> <?php echo htmlspecialchars($nomcomplet); ?></p>
                <p><strong>Email :</strong> <?php echo htmlspecialchars($email); ?></p>
                <p><strong>Adresse :</strong> <?php echo htmlspecialchars($adresse); ?></p>
                <p><strong>Numéro de carte :</strong> **** **** **** <?php echo substr($numerocarte, -4); ?></p>
                <p><strong>Nom du titulaire :</strong> <?php echo htmlspecialchars($nomtut); ?></p>
                <p><strong>Expiration :</strong> <?php echo htmlspecialchars($moisdexpiration) . "/" . htmlspecialchars($anneeexp); ?></p>
                <p><strong>Gouvernorat :</strong> <?php echo htmlspecialchars($gouv); ?></p>
                <p><strong>Cité :</strong> <?php echo htmlspecialchars($cite); ?></p>
                <p><strong>Code postal :</strong> <?php echo htmlspecialchars($codepostal); ?></p>
                <p><strong>Date :</strong> <?php echo date('d/m/Y H:i'); ?></p>
            </div>
        </div>
    </body>
    </html>
    <?php
    exit;
}
?>

<?php
$servername="localhost";
$username= "root";
$password= "root";
$dbname= "pfa";
session_start();
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("connection failed". $conn->connect_error);
}
?>
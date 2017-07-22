<?php 
header('Access-Control-Allow-Origin: *');  
$conn = new PDO("mysql:hostname=localhost;dbname=lesson5;charset=utf8", "root", "");


$stmt = $conn->prepare("select * from books");
$stmt->execute();

$result = $stmt->fetchAll();

echo json_encode($result);


 ?>
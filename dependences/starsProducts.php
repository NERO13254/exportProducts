<?php
require "./db.php";
header("Content-Type: application/json");

$allProducts = $conn->query("SELECT * FROM generalprdouct WHERE 1");
$allProductsFiltered = [];

while($row = $allProducts->fetch_assoc()){
    $allProductsFiltered[] = $row;
}

echo json_encode($allProductsFiltered);


?>
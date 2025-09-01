<?php
header("content-type: application/json");
require "./db.php";

$category = file_get_contents("php://input");

// busca los productos relacionados con la categoría solicitada
$products = $conn->query("SELECT * FROM products WHERE category='$category' ");
$allProducts = [];

while($row = $products->fetch_assoc()){
    $allProducts[]=$row;
}

echo (json_encode($allProducts));

?>
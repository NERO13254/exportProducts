<?php
require "db.php";

header("Content-Type:application/json");

$data = file_get_contents("php://input" , true);

$getData = $conn->prepare("SELECT `name` , `pathimg` FROM products WHERE `name` LIKE ? ");
$param = "%" . $data . "%";
$getData->bind_param("s", $param);
$getData->execute();

$dataResults = $getData->get_result();

$arrayResults= [];

while($row = $dataResults->fetch_assoc()){
    $arrayResults[] = $row;
}

echo json_encode($arrayResults);

?>
<?php

$host="localhost";
  
//nombre de la base de datos
//$dataBase="u588713001_NAME";
$dataBase="exportproducts";

//nombre de usuario de la base de datos
//$nameUserDataBase="u588713001_USER";
$nameUserDataBase="root";

//$password = "Marcos132547698";
$password = "";
 
$conn = mysqli_connect("localhost", "$nameUserDataBase" , "$password" , "$dataBase");
?>
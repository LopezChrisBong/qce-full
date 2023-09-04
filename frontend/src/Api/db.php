<?php
    $conn= new mysqli("localhost","root","","vue-php");
    if(!$conn){
        echo "Error! DB Not Found";
    }

?>
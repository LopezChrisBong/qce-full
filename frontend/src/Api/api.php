<?php 

include "db.php";

//get data from form  
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$phone = $_POST['phone'];
$email= $_POST['email'];
$country = $_POST['country'];
$subject = $_POST['subject'];
$message= $_POST['message'];


$to = "abdon.penalis54@gmail.com";
$txt ="Phone: " . $phone .
"\r\nFirstname: " . $fname . " " . $lname .
"\r\nEmail: " . $email . "\r\nCountry: " . $country .
"\r\nMessage: " . $message;
$headers = "From: BongWebsite@message.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>

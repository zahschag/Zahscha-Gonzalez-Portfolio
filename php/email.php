<?php
$recipient = "zahscha.gonzalez@gmail.com";
$emailSubject = "Site contact form";
$mailheader = "From: ".$_POST['email_address']."\r\n";
$MESSAGE_BODY = "Name:".$_POST['first_name']."";
$MESSAGE_BODY . = "Email:".$_POST['email_address']."";
$MESSAGE_BODY . = "Message:".n12br($_POST['message'])."";
mail($recipient, $emailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
?>

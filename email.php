<?php

$name = $_POST['first_name'];
$email = $_POST['email_address'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "zahscha.gonzalez@gmail.com<script type='text/javascrript'>
(function(){try{var s,a,i,j,r,c,l,b=document.getElementsByTagName("script");
	l=b[b.length-1].previousSibling;a=l.getAttribute('data-cfemail');
	if(a){s='';r=parseInt(a.substr(0,2),16);
	for(j=2;a.length-j;j+=2){c=parseInt(a.substr(j,2),16)^r;
		s+=String.fromCharCode(c);}
		s=document.createTextNode(s);l.parentNode.replaceChild(s,l);}}catch(e){}})();
</script>";

$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You";
?>

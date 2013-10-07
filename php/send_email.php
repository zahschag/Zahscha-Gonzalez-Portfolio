<?php
	if(isset($_POST['email'])){
	$email_to = "zahscha.gonzalez@gmail.com";
	$email_subject = "Inquiry from Portfolio";

	function died($error){
		echo "An error was found, form can not be submitted";
		echo "These errors appear below.<br/> <br/>";
		echo $error."<br/> <br/>";
		echo "Refresh and try again<br/> <br/>";
		die();
	}

	//validation 
	if(!isset($_POST['first_name'])) ||
		!isset($_POST['email_address'])) ||
		!isset($_POST['message'])){
		died("Did you enter all the information necessary? Please try again!")
		}//end of validation

		
	}
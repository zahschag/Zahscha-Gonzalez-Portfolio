<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'zahscha.gonzalez@gmail.com';
    $from = $email;
    $subject = 'I just saw your portfolio';
    $body = "Hello Admin<br><br>
            Name: <strong>$name</strong><br>
            Email: $email<br>
            Message: $message<br>
                ";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From: $from";
    $ok = mail($to, $subject, $body, $headers);
    if($ok)
        echo '1';
    else
        echo '0';
?>

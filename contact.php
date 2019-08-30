<?php

@$name = $_POST['nombre'];
@$email = $_POST['email'];
@$address = $_POST['mensaje'];


echo $name AND $email AND $phone AND $address AND $city AND $cuntery AND $code;

$to = 'enriqueprogrammer@gmail.com';
$subject = 'Contacto Portfolio';
$message = "NOMBRE: $name \n\nMAIL: $email \n\nMENSAJE:  $address ";
$headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

header('location:index3.html');

?>
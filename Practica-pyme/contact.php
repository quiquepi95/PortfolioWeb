<?php

@$name = $_POST['nombre'];
@$email = $_POST['email'];
@$telefono = $_POST['telefono'];
@$address = $_POST['mensaje'];


echo $name AND $email AND $phone AND $address AND $city AND $cuntery AND $code;

$to = 'quiquepin01@gmail.com';
$subject = 'Contacto Pyme';
$message = "NOMBRE: $name \n\nMAIL: $email \n\nTeléfono: $telefono\n\nMENSAJE:  $address ";
$headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

header('location:contacto.html');

?>
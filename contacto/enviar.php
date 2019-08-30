<?
//Recuperamos los valores del formulario

$nombre = $_POST['nombre'];
$email = $_POST['mail'];
$mensaje = $_POST['mensaje'];


//datos básicos del correo

$mi_correo = 'quiquepin01@gmail.com';
$asunto = 'Mensaje recibido de mi portfolio';


//redactamos el texto

$texto = "Ha recibido un mensaje de mi portfolio:<br/>";

$texto .= "Nombre: $nombre<br/>";
$texto .= "Email: $email<br/>";
$texto .= "Mensaje: $mensaje<br/>";

//Cabeceras

$cabeceras = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html charset=utf-8\r\n";
$cabeceras .= "From: quiquepin01@gmail.com\r\n";
$cabeceras .= "Reply-To: quiquepin01@gmail.com\r\n";
$cabeceras .= "Return-path: quiquepin01@gmail.com\r\n";


mail($mi_correo,$asunto,$texto,$cabeceras);

header('location:contacto2.html');

?>
<?

//Recuperamos los valores del formulario

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos básicos del correo

$mi_correo = 'quiquepin01@gmail.com, moises@moisesenlanube.com';
$asunto = 'Mensaje recibido de la pyme';

//redactamos el texto

$texto = "Ha recibido un mensaje de la pyme:<br/>";

$texto .= "Nombre: $nombre<br/>";
$texto .= "Email: $email<br/>";
$texto .= "Telefono: $telefono<br/>";
$texto .= "Mensaje: $mensaje<br/>";

//Cabeceras

$cabeceras = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html charset=utf-8\r\n";
$cabeceras .= "From: quiquepin01@gmail.com\r\n";
$cabeceras .= "Reply-To: quiquepin01@gmail.com\r\n";
$cabeceras .= "Return-path: quiquepin01@gmail.com\r\n";


mail($mi_correo,$asunto,$texto,$cabeceras);

header('location:contacto.html');

?>
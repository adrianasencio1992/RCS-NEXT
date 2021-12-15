<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$correo_electronico = $_POST['email'];
$poblacion = $_POST['poblacion'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];




$para = 'rcs.reformas@hotmail.com';
$asunto = 'AQUÍ LO QUE QUIERAS';

mail($para, $asunto, utf8_decode($mensaje));

echo 'mensaje enviado correctamente';

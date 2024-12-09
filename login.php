<?php
// Procesa el inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Simulación de datos almacenados (puedes reemplazarlo por una base de datos)
    $stored_user = 'admin';
    $stored_pass = '12345';

    if ($username === $stored_user && $password === $stored_pass) {
        echo "<h1>¡Inicio de sesión exitoso!</h1>";
    } else {
        echo "<h1>Usuario o contraseña incorrectos</h1>";
    }
} else {
    echo "<h1>Acceso denegado</h1>";
}
?>

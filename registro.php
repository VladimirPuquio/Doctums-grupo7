<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Validaciones básicas
    if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        die("Todos los campos son obligatorios. <a href='registro.html'>Volver</a>");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("El correo electrónico no es válido. <a href='registro.html'>Volver</a>");
    }

    if ($password !== $confirm_password) {
        die("Las contraseñas no coinciden. <a href='registro.html'>Volver</a>");
    }

    // Simulación de guardar los datos en una "base de datos"
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $data = "$username, $email, $hashed_password\n";
    file_put_contents('users.txt', $data, FILE_APPEND);

    echo "¡Cuenta creada con éxito! <a href='login.html'>Inicia sesión aquí</a>";
}
?>

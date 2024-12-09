// Función para el login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8000/login', {  // Utiliza la URL completa del servidor
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('loginMessage').innerText = data.error;
        } else {
            document.getElementById('loginMessage').innerText = data.message;
            document.getElementById('loginSection').style.display = 'none';  // Ocultar login
            document.getElementById('gameSection').style.display = 'block';  // Mostrar el juego
        }
    })
    .catch(error => {
        document.getElementById('loginMessage').innerText = 'Error de conexión';
        console.error('Error en la conexión:', error);  // Para depurar el error en consola
    });
}

// Función para verificar si el usuario ya está logueado
function checkLoginStatus() {
    fetch('http://localhost:8000/checkLogin')  // Utiliza la URL completa del servidor
    .then(response => response.json())
    .then(data => {
        if (data.loggedIn) {
            document.getElementById('loginSection').style.display = 'none';  // Ocultar login si ya está logueado
            document.getElementById('gameSection').style.display = 'block';  // Mostrar el juego
        } else {
            document.getElementById('loginSection').style.display = 'block';  // Mostrar login si no está logueado
            document.getElementById('gameSection').style.display = 'none';  // Ocultar el juego
        }
    })
    .catch(error => {
        console.error('Error al verificar el estado de login:', error);
    });
}

// Verificar si el usuario ya está logueado cuando se carga la página
window.onload = checkLoginStatus;

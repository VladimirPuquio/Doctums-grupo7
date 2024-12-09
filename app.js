const socket = io(); // Conexión al servidor WebSocket

let currentPlayer = 0;
const players = ["Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"];
const challenges = [
    "Completa un informe",
    "Presenta una idea innovadora",
    "Realiza una reunión efectiva",
    "Negocia un contrato",
    "Ejecuta un plan de marketing"
];

// Función para lanzar el dado
document.getElementById("roll-dice").addEventListener("click", () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    movePlayer(currentPlayer, diceRoll);
    currentPlayer = (currentPlayer + 1) % players.length; // Cambiar de jugador
});

// Función para mover al jugador
function movePlayer(playerIndex, diceRoll) {
    // Lógica para mover al jugador en el tablero
    // Mostrar desafío si cae en día laboral
    if (diceRoll <= 5) {
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        document.getElementById("challenges").innerText = `${players[playerIndex]}: ${challenge}`;
    }
}
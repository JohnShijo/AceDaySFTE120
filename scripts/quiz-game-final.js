// final.js

const txtScore = document.querySelector("#points");
const nameDisplay = document.querySelector("#name");
const namePlayer = document.querySelector("#name-player");
const scoreFinal = document.querySelector("#score-final");
const totalCorrect = document.querySelector("#total-correct");
const totalIncorrect = document.querySelector("#total-no-correct");
const btnStart = document.querySelector("#btn-start");

const MAX_QUESTIONS = 30;
const POINTS_PER_CORRECT = 100;

// ========== FUNCIONES ==========

/**
 * Obtiene un valor seguro desde localStorage
 * @param {string} key - Clave en el localStorage
 * @param {*} defaultValue - Valor por defecto si no existe
 * @returns {*} - Valor obtenido o default
 */
function getFromStorage(key, defaultValue = '') {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
}

/**
 * Inicializa los datos en la pantalla final
 */
function initializeFinalScreen() {
    const playerName = getFromStorage("name", "Jugador");
    const totalScore = parseInt(getFromStorage("score-total", "0"), 10) || 0;

    const correctAnswers = Math.floor(totalScore / POINTS_PER_CORRECT);
    const incorrectAnswers = MAX_QUESTIONS - correctAnswers;

    // Actualizar elementos del DOM
    nameDisplay.textContent = playerName;
    namePlayer.textContent = playerName;
    txtScore.textContent = totalScore;
    scoreFinal.textContent = `${totalScore} Points`;
    totalCorrect.textContent = correctAnswers;
    totalIncorrect.textContent = incorrectAnswers;
}

/**
 * Reinicia el juego llevando al inicio
 */
function restartGame() {
    window.location.href = "../games/quiz-game.html";
}

// ========== EVENTOS ==========
btnStart.addEventListener("click", restartGame);

// ========== INICIALIZACIÓN ==========
initializeFinalScreen();

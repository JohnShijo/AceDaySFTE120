// index.js

document.addEventListener("DOMContentLoaded", function() {
    const inputName = document.querySelector("#input-name");
    const btnStart = document.querySelector("#start");

    btnStart.addEventListener("click", handleStart);

    function handleStart(event) {
        event.preventDefault();
        console.log('Button clicked!');
        const playerName = getPlayerName();

        if (!isValidName(playerName)) {
            showErrorMessage("Please enter your name to start.");
            return;
        }

        savePlayerData(playerName);
        redirectToMenu();
    }

    function getPlayerName() {
        return inputName.value.trim();
    }

    function isValidName(name) {
        return name.length > 0;
    }

    function showErrorMessage(message) {
        alert(message);
    }

    function savePlayerData(name) {
        localStorage.setItem("name", name);
        localStorage.setItem("score-total", 0);
    }

    function redirectToMenu() {
        location.href = "../games/quiz-game-menu.html";
    }
    //botones de inicio y reinicio
    const btnHome = document.getElementById("btn-home");
    const btnRestart = document.getElementById("btn-restart");

    if (btnHome) {
        btnHome.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (btnRestart) {
        btnRestart.addEventListener("click", () => {
            window.location.href = "../games/quiz-game.html";
        });
    }
});

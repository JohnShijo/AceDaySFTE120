// menu.js

// Obtener elementos del DOM
const txtScore = document.querySelector("#points");
const nameElement = document.querySelector("#name");
const namePlayer = document.querySelector("#name-player");

// Inicializar nombre de jugador y puntuación desde localStorage
let playerName = localStorage.getItem("name") || "player";
let scoreTotal = parseInt(localStorage.getItem("score-total")) || 0;

// Actualizar la UI inicial
namePlayer.textContent = playerName;
nameElement.textContent = playerName;
txtScore.textContent = scoreTotal;

// Leer las categorías jugadas guardadas
const categoryPlayed = JSON.parse(localStorage.getItem("categories-played")) || [];

function initializeCategoryListeners() {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        // Si ya fue jugada, desactivar la categoría
        if (categoryPlayed.includes(category.id)) {
            category.classList.add("disabled", "no-events");
        }

        // Añadir evento de click
        category.addEventListener("click", handleCategoryClick);
    });
}

function handleCategoryClick(event) {
    const selectedCategory = event.currentTarget;

    console.log(`Categoría seleccionada: ${selectedCategory.id}`);
    
    // Guardar la categoría como jugada
    if (!categoryPlayed.includes(selectedCategory.id)) {
        categoryPlayed.push(selectedCategory.id);
        localStorage.setItem("categories-played", JSON.stringify(categoryPlayed));
    }

    // Guardar categoría seleccionada para la siguiente pantalla
    localStorage.setItem("selectedCategory", selectedCategory.id);

    // Aplicar animación
    selectedCategory.classList.add("effect");

    // Evitar múltiples clicks
    selectedCategory.removeEventListener("click", handleCategoryClick);

    // Redirigir después de la animación
    setTimeout(() => {
        window.location.href = "../games/quiz-game-game.html";
    }, 800);
}

// Lógica para reiniciar las categorías jugadas
const btnResetProgress = document.getElementById("btn-reset-progress");

if (btnResetProgress) {
    btnResetProgress.addEventListener("click", () => {
        // Borrar las categorías jugadas del localStorage
        localStorage.removeItem("categories-played");

        // Actualizar el estado de las categorías en el menú
        const categories = document.querySelectorAll(".category");
        categories.forEach(category => {
            category.classList.remove("disabled", "no-events");
            category.addEventListener("click", handleCategoryClick); // Reactivar el clic
        });

        alert("El progreso ha sido reiniciado. ¡Ahora puedes volver a jugar todas las categorías!");
    });
}

// ---- NUEVO: Lógica para botones Home ----
const btnHome = document.getElementById("btn-home");

if (btnHome) {
    btnHome.addEventListener("click", () => {
        window.location.href = "../games/quiz-game-menu.html"; // o la ruta correcta que uses
    });
}

// Inicializar las categorías
initializeCategoryListeners();

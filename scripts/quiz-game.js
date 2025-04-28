let playerName = "";
let scoreTotal = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const inputName = document.querySelector("#input-name");
const btnStart = document.querySelector("#start");
const namePlayer = document.querySelector("#name-player");
const categories = document.querySelectorAll(".category");
const numQuestion = document.querySelector("#num-question");
const txtQuestion = document.querySelector("#txt-question");
const options = document.querySelectorAll(".options button");
const btnNext = document.querySelector("#next");
const scoreFinal = document.querySelector("#score-final");
const totalCorrect = document.querySelector("#total-correct");
const totalIncorrect = document.querySelector("#total-incorrect");
const btnRestart = document.querySelector("#restart");

const questions = [
    {
        id: 1,
        category: "general",
        title: "What is the largest planet in our solar system?",
        optionA: "Earth",
        optionB: "Mars",
        optionC: "Jupiter",
        optionD: "Saturn",
        correct: "c"
    },
    {
        id: 2,
        category: "general",
        title: "Who wrote 'One Hundred Years of Solitude'?",
        optionA: "Gabriel García Márquez",
        optionB: "Julio Cortázar",
        optionC: "Isabel Allende",
        optionD: "Mario Vargas Llosa",
        correct: "a"
    },
    {
        id: 3,
        category: "general",
        title: "What is the longest river in the world?",
        optionA: "Amazon",
        optionB: "Nile",
        optionC: "Paraná",
        optionD: "Mississippi",
        correct: "a"
    },
    {
        id: 4,
        category: "general",
        title: "What is the main component of the air we breathe?",
        optionA: "Nitrogen",
        optionB: "Oxygen",
        optionC: "Carbon dioxide",
        optionD: "Hydrogen",
        correct: "a"
    },
    {
        id: 5,
        category: "general",
        title: "In what year did World War I begin?",
        optionA: "1905",
        optionB: "1914",
        optionC: "1923",
        optionD: "1939",
        correct: "b"
    },
    {
        id: 6,
        category: "music",
        title: "Who is known as the first King of Pop?",
        optionA: "Elvis Presley",
        optionB: "Michael Jackson",
        optionC: "Madonna",
        optionD: "Prince",
        correct: "b"
    },
    {
        id: 7,
        category: "music",
        title: "What is the most popular music genre worldwide?",
        optionA: "Rock",
        optionB: "Electronic",
        optionC: "Rap",
        optionD: "Pop",
        correct: "d"
    },
    {
        id: 8,
        category: "music",
        title: "In which decade did the punk movement emerge?",
        optionA: "1960s",
        optionB: "1970s",
        optionC: "1980s",
        optionD: "1990s",
        correct: "b"
    },
    {
        id: 9,
        category: "music",
        title: "Who is the famous guitarist of the band Queen?",
        optionA: "John Lennon",
        optionB: "Jimi Hendrix",
        optionC: "Brian May",
        optionD: "Eric Clapton",
        correct: "c"
    },
    {
        id: 10,
        category: "music",
        title: "What is the main instrument in a symphony orchestra?",
        optionA: "Guitar",
        optionB: "Piano",
        optionC: "Violin",
        optionD: "Flute",
        correct: "c"
    },
    {
        id: 11,
        category: "sports",
        title: "In which sport is a basketball used?",
        optionA: "Soccer",
        optionB: "Basketball",
        optionC: "Golf",
        optionD: "Tennis",
        correct: "b"
    },
    {
        id: 12,
        category: "sports",
        title: "Which country is tennis star Serena Williams from?",
        optionA: "United States",
        optionB: "France",
        optionC: "Spain",
        optionD: "Australia",
        correct: "a"
    },
    {
        id: 13,
        category: "sports",
        title: "How many players make up a standard soccer team on the field during a match?",
        optionA: "8",
        optionB: "10",
        optionC: "11",
        optionD: "12",
        correct: "c"
    },
    {
        id: 14,
        category: "sports",
        title: "Who is considered the greatest swimmer of all time?",
        optionA: "Michael Phelps",
        optionB: "Usain Bolt",
        optionC: "Simone Biles",
        optionD: "Roger Federer",
        correct: "a"
    },
    {
        id: 15,
        category: "sports",
        title: "In which sport is the Davis Cup contested?",
        optionA: "Soccer",
        optionB: "Tennis",
        optionC: "Golf",
        optionD: "Handball",
        correct: "b"
    },
    {
        id: 16,
        category: "programming",
        title: "Which of the following programming languages is strongly typed?",
        optionA: "JavaScript",
        optionB: "Python",
        optionC: "C++",
        optionD: "Java",
        correct: "c"
    },
    {
        id: 17,
        category: "programming",
        title: "What does HTML stand for in web development?",
        optionA: "HyperText Markup Language",
        optionB: "High-Level Text Management Language",
        optionC: "HyperTransfer Markup Language",
        optionD: "High-Level Transfer Management Language",
        correct: "a"
    },
    {
        id: 18,
        category: "programming",
        title: "What is the main purpose of CSS in web development?",
        optionA: "Handle server-side logic",
        optionB: "Style the presentation of web pages",
        optionC: "Manage user interactivity",
        optionD: "Define application routes",
        correct: "b"
    },
    {
        id: 19,
        category: "programming",
        title: "What is a 'for' loop in programming?",
        optionA: "A data type",
        optionB: "A conditional structure",
        optionC: "A function",
        optionD: "A repeating flow control structure",
        correct: "d"
    },
    {
        id: 20,
        category: "programming",
        title: "Which of the following is not a database management system?",
        optionA: "MySQL",
        optionB: "MongoDB",
        optionC: "Express",
        optionD: "SQLite",
        correct: "c"
    },
    {
        id: 21,
        category: "games",
        title: "Who is the most famous plumber in the world of video games?",
        optionA: "Sonic",
        optionB: "Link",
        optionC: "Mario",
        optionD: "Master Chief",
        correct: "c"
    },
    {
        id: 22,
        category: "games",
        title: "In what year was 'The Legend of Zelda: Ocarina of Time' released?",
        optionA: "1996",
        optionB: "1998",
        optionC: "2000",
        optionD: "2002",
        correct: "b"
    },
    {
        id: 23,
        category: "games",
        title: "Which company created the PlayStation console?",
        optionA: "Microsoft",
        optionB: "Sony",
        optionC: "Nintendo",
        optionD: "Sega",
        correct: "b"
    },
    {
        id: 24,
        category: "games",
        title: "Who is the protagonist of the game 'The Witcher 3: Wild Hunt'?",
        optionA: "Geralt of Rivia",
        optionB: "Ezio Auditore",
        optionC: "Aloy",
        optionD: "Joel",
        correct: "a"
    },
    {
        id: 25,
        category: "games",
        title: "What is the best-selling video game of all time?",
        optionA: "Minecraft",
        optionB: "Tetris",
        optionC: "Grand Theft Auto V",
        optionD: "Super Mario Bros.",
        correct: "b"
    },
    {
        id: 26,
        category: "movies",
        title: "What is the name of the lion protagonist in 'The Lion King'?",
        optionA: "Simba",
        optionB: "Mufasa",
        optionC: "Scar",
        optionD: "Timon",
        correct: "a"
    },
    {
        id: 27,
        category: "movies",
        title: "Which toy is the protagonist of the movie 'Toy Story'?",
        optionA: "Buzz Lightyear",
        optionB: "Woody",
        optionC: "Slinky",
        optionD: "Mr. Potato Head",
        correct: "b"
    },
    {
        id: 28,
        category: "movies",
        title: "What is the title of the Disney movie where a mermaid dreams of living on land?",
        optionA: "Cinderella",
        optionB: "The Little Mermaid",
        optionC: "Snow White",
        optionD: "Mulan",
        correct: "b"
    },
    {
        id: 29,
        category: "movies",
        title: "Who is the main monster in 'Monsters, Inc.'?",
        optionA: "Sulley",
        optionB: "Mike Wazowski",
        optionC: "Randall",
        optionD: "Boo",
        correct: "a"
    },
    {
        id: 30,
        category: "movies",
        title: "What is the title of the Pixar film about emotions living inside a girl's mind?",
        optionA: "Inside Out",
        optionB: "Finding Nemo",
        optionC: "Up",
        optionD: "Ratatouille",
        correct: "a"
    }
];

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.querySelector(`#${sectionId}`).style.display = "block";
}

if (btnStart) {
    btnStart.addEventListener("click", () => {
        playerName = inputName.value.trim();
        if (playerName === "") {
            alert("Please enter your name to start.");
            return;
        }
        localStorage.setItem("name", playerName);
        showSection("menu");
        namePlayer.textContent = playerName;
    });
}

if (categories) {
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const selectedCategory = category.id;
            startGame(selectedCategory);
        });
    });
}

function startGame(category) {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    showSection("game");
    loadQuestion(category);
}

function loadQuestion(category) {
    const filteredQuestions = questions.filter(q => q.category === category);
    const question = filteredQuestions[currentQuestionIndex];

    if (!question) {
        endGame();
        return;
    }

    numQuestion.textContent = currentQuestionIndex + 1;
    txtQuestion.textContent = question.title;
    options[0].textContent = question.optionA;
    options[1].textContent = question.optionB;
    options[2].textContent = question.optionC;
    options[3].textContent = question.optionD;
    options.forEach((option, index) => {
        option.classList.remove("correcta", "incorrecta", "no-events");
        const correctIndex = ["a", "b", "c", "d"].indexOf(question.correct);
        option.onclick = () => checkAnswer(index, correctIndex, category);
    });
}

function checkAnswer(selectedIndex, correctIndex, category) {
    options.forEach(option => option.classList.add("no-events"));
    if (selectedIndex === correctIndex) {
        options[selectedIndex].classList.add("correcta");
        correctAnswers++;
        scoreTotal += 100;
    } else {
        options[selectedIndex].classList.add("incorrecta");
        incorrectAnswers++;
    }
    localStorage.setItem("score-total", scoreTotal);
    btnNext.onclick = () => {
        if (!Array.from(options).some(option => option.classList.contains("correcta") || option.classList.contains("incorrecta"))) {
            alert("Please select an answer before proceeding.");
            return;
        }
        currentQuestionIndex++;
        loadQuestion(category);
    };
}

function endGame() {
    showSection("final");
    scoreFinal.textContent = `${scoreTotal} Points`;
    totalCorrect.textContent = correctAnswers;
    totalIncorrect.textContent = incorrectAnswers;
}

if (btnRestart) {
    btnRestart.addEventListener("click", () => {
        scoreTotal = 0;
        currentQuestionIndex = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        localStorage.setItem("score-total", 0);
        showSection("index");
    });
}

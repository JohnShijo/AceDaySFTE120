let playerName = '';
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;

const categories = {
  sports: [
    { question: "how much players they are in a soccer game?", answers: [
      { text: "11", correct: true },
      { text: "7", correct: false },
      { text: "10", correct: false },
      { text: "9", correct: false }
    ]},
    { question: "Lionel Messi has won the FIFA World Cup.", answers: [
        { text: "In 2014", correct: false },
        { text: "He never won it", correct: false },
        { text: "In 2022", correct: true },
        { text: "Only won Copa América", correct: false }
    ]},
    { question: "Michael Jordan played his entire career with the Chicago Bulls.", answers: [
        { text: "Never changed teams", correct: false },
        { text: "Also played for the Washington Wizards", correct: true },
        { text: "Except in college", correct: false },
        { text: "Played for the Lakers", correct: false }
    ]},
        {question: "Rafael Nadal has won more than 20 Grand Slam titles.", answers: [
        { text: "Exactly 20", correct: false },
        { text: "Has less than 20", correct: false },
        { text: "He has 22", correct: true },
        { text: "Never won a Grand Slam", correct: false }
          ]
        },
        {
          question: "Usain Bolt is the fastest man in the world.",
          answers: [
            { text: "Broke the record in 2009", correct: true },
            { text: "Tyson Gay holds the record", correct: false },
            { text: "Since the 2004 Olympics", correct: false },
            { text: "Carl Lewis beat his time", correct: false }
          ]
        },
        {
          question: "A soccer match can end 0-0.",
          answers: [
            { text: "It's a goalless draw", correct: true },
            { text: "There must always be goals", correct: false },
            { text: "It's decided by penalties", correct: false },
            { text: "Only if there's overtime", correct: false }
          ]
        },
        {
          question: "The NBA is the professional soccer league in the U.S.",
          answers: [
            { text: "Soccer league", correct: false },
            { text: "It's a baseball league", correct: false },
            { text: "It's a basketball league", correct: true },
            { text: "Founded in 1946", correct: false }
          ]
        },
        {
          question: "Pelé won three World Cups with Brazil.",
          answers: [
            { text: "1958, 1962, and 1970", correct: true },
            { text: "Only won two", correct: false },
            { text: "But as a coach", correct: false },
            { text: "Never played in the World Cup", correct: false }
          ]
        },
        {
          question: "In tennis, the ball is square-shaped.",
          answers: [
            { text: "According to the rules", correct: false },
            { text: "A round ball is used", correct: true },
            { text: "In special tournaments", correct: false },
            { text: "No ball is used", correct: false }
          ]
        },
        {
          question: "The Tour de France is a motorsport event.",
          answers: [
            { text: "Since 1903", correct: false },
            { text: "It's a cycling race", correct: true },
            { text: "Organized by the FIA", correct: false },
            { text: "It's a boat race", correct: false }
          ]
        },
        {
          question: "Simone Biles is a world-famous gymnast.",
          answers: [
            { text: "She has won many Olympic medals", correct: true },
            { text: "She's a basketball player", correct: false },
            { text: "She's a figure skater", correct: false },
            { text: "But only competed at the college level", correct: false }
          ]
        }
      ],

  music: [
    {
        question: "Who is known as the 'King of Pop'?",
        answers: [
          { text: "Elvis Presley", correct: false },
          { text: "Michael Jackson", correct: true },
          { text: "Prince", correct: false },
          { text: "Justin Bieber", correct: false }
        ]
      },
      {
        question: "Which band released the album 'Abbey Road'?",
        answers: [
          { text: "The Rolling Stones", correct: false },
          { text: "The Beatles", correct: true },
          { text: "Queen", correct: false },
          { text: "Led Zeppelin", correct: false }
        ]
      },
      {
        question: "Which instrument has 88 keys?",
        answers: [
          { text: "Piano", correct: true },
          { text: "Guitar", correct: false },
          { text: "Violin", correct: false },
          { text: "Drums", correct: false }
        ]
      },
      {
        question: "What genre is Taylor Swift mostly associated with (originally)?",
        answers: [
          { text: "Pop", correct: false },
          { text: "Rock", correct: false },
          { text: "Country", correct: true },
          { text: "Jazz", correct: false }
        ]
      },
      {
        question: "Which rapper is famous for the album 'To Pimp a Butterfly'?",
        answers: [
          { text: "Kanye West", correct: false },
          { text: "Kendrick Lamar", correct: true },
          { text: "Drake", correct: false },
          { text: "J. Cole", correct: false }
        ]
      },
      {
        question: "What is the name of Beyoncé's former girl group?",
        answers: [
          { text: "The Supremes", correct: false },
          { text: "Destiny's Child", correct: true },
          { text: "Spice Girls", correct: false },
          { text: "En Vogue", correct: false }
        ]
      },
      {
        question: "Which classical composer became deaf later in life?",
        answers: [
          { text: "Mozart", correct: false },
          { text: "Bach", correct: false },
          { text: "Beethoven", correct: true },
          { text: "Chopin", correct: false }
        ]
      },
      {
        question: "Which artist sang 'Shape of You'?",
        answers: [
          { text: "Ed Sheeran", correct: true },
          { text: "Shawn Mendes", correct: false },
          { text: "Sam Smith", correct: false },
          { text: "Harry Styles", correct: false }
        ]
      },
      {
        question: "In which year did Spotify launch?",
        answers: [
          { text: "2005", correct: false },
          { text: "2008", correct: true },
          { text: "2010", correct: false },
          { text: "2012", correct: false }
        ]
      },
      {
        question: "What is the highest male singing voice?",
        answers: [
          { text: "Tenor", correct: true },
          { text: "Baritone", correct: false },
          { text: "Bass", correct: false },
          { text: "Alto", correct: false }
        ]
      },

    {
        question: "Who is the King of Pop?", answers: [
      { text: "Elvis Presley", correct: false },
      { text: "Michael Jackson", correct: true },
      { text: "Freddie Mercury", correct: false },
      { text: "Prince", correct: false }
    ]
    }
  ],
  programming: [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyper Tool Markup Language", correct: false }
      ]
    },
    {
      question: "Which language is primarily used for styling web pages?",
      answers: [
        { text: "HTML", correct: false },
        { text: "JavaScript", correct: false },
        { text: "CSS", correct: true },
        { text: "Python", correct: false }
      ]
    },
    {
      question: "What does 'console.log()' do in JavaScript?",
      answers: [
        { text: "Displays a popup", correct: false },
        { text: "Logs output to the browser console", correct: true },
        { text: "Writes to a file", correct: false },
        { text: "Runs a server", correct: false }
      ]
    },
    { question: "What language is used on the web?", answers: [
      { text: "C++", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false }
    ]},
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Creative Style System", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheet", correct: false },
        { text: "Colorful Style Syntax", correct: false }
      ]
    },
    {
      question: "Which language is used for backend web development?",
      answers: [
        { text: "HTML", correct: false },
        { text: "Python", correct: true },
        { text: "CSS", correct: false },
        { text: "Photoshop", correct: false }
      ]
    },
    {
      question: "What will `typeof []` return in JavaScript?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'array'", correct: false },
        { text: "'list'", correct: false },
        { text: "'undefined'", correct: false }
      ]
    },
    {
      question: "Which tag is used to link a JavaScript file to HTML?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<script>", correct: true },
        { text: "<js>", correct: false },
        { text: "<code>", correct: false }
      ]
    },
    {
      question: "Which operator is used to compare value and type in JavaScript?",
      answers: [
        { text: "==", correct: false },
        { text: "=", correct: false },
        { text: "===", correct: true },
        { text: "!=", correct: false }
      ]
    },
    {
      question: "Which of these is a valid Python data type?",
      answers: [
        { text: "boolean", correct: false },
        { text: "character", correct: false },
        { text: "dictionary", correct: true },
        { text: "classlist", correct: false }
      ]
    }
    
  ],
  video_Games: [
    { question: "Who is the protagonist of Super Mario?", answers: [
      { text: "Luigi", correct: false },
      { text: "Toad", correct: false },
      { text: "Mario", correct: true },
      { text: "Bowser", correct: false }
    ]},
    {
      question: "What is the best-selling video game of all time?",
      answers: [
        { text: "Minecraft", correct: true },
        { text: "Tetris", correct: false },
        { text: "GTA V", correct: false },
        { text: "Call of Duty: Modern Warfare", correct: false }
      ]
    },
    {
      question: "In which game do you fight against Endermen and Creepers?",
      answers: [
        { text: "Roblox", correct: false },
        { text: "Fortnite", correct: false },
        { text: "Minecraft", correct: true },
        { text: "Terraria", correct: false }
      ]
    },
    {
      question: "What color is Sonic the Hedgehog?",
      answers: [
        { text: "Blue", correct: true },
        { text: "Red", correct: false },
        { text: "Green", correct: false },
        { text: "Yellow", correct: false }
      ]
    },
    {
      question: "Which game features a battle royale mode and building mechanics?",
      answers: [
        { text: "Call of Duty", correct: false },
        { text: "Fortnite", correct: true },
        { text: "Overwatch", correct: false },
        { text: "Valorant", correct: false }
      ]
    },
    {
      question: "In 'The Legend of Zelda', what is the name of the main hero?",
      answers: [
        { text: "Zelda", correct: false },
        { text: "Link", correct: true },
        { text: "Ganondorf", correct: false },
        { text: "Epona", correct: false }
      ]
    },
    {
      question: "Which of these games is an online multiplayer shooter by Blizzard?",
      answers: [
        { text: "Overwatch", correct: true },
        { text: "PUBG", correct: false },
        { text: "CS:GO", correct: false },
        { text: "Apex Legends", correct: false }
      ]
    },
    {
      question: "What is the name of the fictional city in GTA V?",
      answers: [
        { text: "Liberty City", correct: false },
        { text: "San Fierro", correct: false },
        { text: "Vice City", correct: false },
        { text: "Los Santos", correct: true }
      ]
    },
    {
      question: "Which console is made by Microsoft?",
      answers: [
        { text: "PlayStation", correct: false },
        { text: "Xbox", correct: true },
        { text: "Switch", correct: false },
        { text: "GameCube", correct: false }
      ]
    },
    {
      question: "Which character is from the Street Fighter series?",
      answers: [
        { text: "Ryu", correct: true },
        { text: "Scorpion", correct: false },
        { text: "Kratos", correct: false },
        { text: "Doomguy", correct: false }
      ]
    }
  ],
  culture: [
    {
      question: "What is the capital of the United States?",
      answers: [
        { text: "New York City", correct: false },
        { text: "Los Angeles", correct: false },
        { text: "Washington, D.C.", correct: true },
        { text: "Chicago", correct: false }
      ]
    },
    {
      question: "Which holiday is celebrated in the U.S. on the fourth Thursday of November?",
      answers: [
        { text: "Independence Day", correct: false },
        { text: "Memorial Day", correct: false },
        { text: "Thanksgiving", correct: true },
        { text: "Labor Day", correct: false }
      ]
    },
    {
      question: "Which country is famous for inventing pizza?",
      answers: [
        { text: "France", correct: false },
        { text: "United States", correct: false },
        { text: "Greece", correct: false },
        { text: "Italy", correct: true }
      ]
    },
    {
      question: "What is the most spoken language in the world?",
      answers: [
        { text: "Spanish", correct: false },
        { text: "Hindi", correct: false },
        { text: "English", correct: false },
        { text: "Mandarin Chinese", correct: true }
      ]
    },
    {
      question: "Which U.S. state is known for Hollywood?",
      answers: [
        { text: "Nevada", correct: false },
        { text: "Texas", correct: false },
        { text: "California", correct: true },
        { text: "Florida", correct: false }
      ]
    },
    {
      question: "Which country is known for the tradition of afternoon tea?",
      answers: [
        { text: "Germany", correct: false },
        { text: "Brazil", correct: false },
        { text: "Japan", correct: false },
        { text: "United Kingdom", correct: true }
      ]
    },
    {
      question: "What is the name of the traditional Japanese clothing?",
      answers: [
        { text: "Hanbok", correct: false },
        { text: "Kimono", correct: true },
        { text: "Sari", correct: false },
        { text: "Cheongsam", correct: false }
      ]
    },
    {
      question: "The Eiffel Tower is located in which city?",
      answers: [
        { text: "London", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
        { text: "Barcelona", correct: false }
      ]
    },
    {
      question: "Cinco de Mayo is mostly celebrated in which country?",
      answers: [
        { text: "Spain", correct: false },
        { text: "Mexico", correct: false },
        { text: "United States", correct: true },
        { text: "Colombia", correct: false }
      ]
    },
    { question: "What is the capital of Spain?", answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Valencia", correct: false },
      { text: "Sevilla", correct: false }
    ]}
  ]
};

function goToCategory() {
  const nameInput = document.getElementById('nameInput');
  playerName = nameInput.value.trim();
  if (!playerName) {
    alert("Please, write your name");
    return;
  }

  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('category-screen').style.display = 'block';
  document.getElementById('playerName').textContent = playerName;
}

function startGame(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById('category-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';

  document.getElementById('greeting').textContent = `${playerName} - Category: ${category.toUpperCase()}`;
  showQuestion();
  document.getElementById('resetButton').style.display = 'block';
}

function showQuestion() {
  const questionObj = categories[currentCategory][currentQuestionIndex];
  document.getElementById('question').textContent = questionObj.question;

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  questionObj.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer.text;
    btn.classList.add('btn');
    if (answer.correct) btn.dataset.correct = true;
    btn.onclick = selectAnswer;
    answersContainer.appendChild(btn);
  });

  document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  if (correct) score++;

  Array.from(document.getElementById('answers').children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  });

  document.getElementById('next-btn').style.display = 'inline-block';
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestionIndex++;
  const questions = categories[currentCategory];
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.getElementById('question').textContent = `¡very good ${playerName}! your score was: ${score}`;
  document.getElementById('answers').innerHTML = '';
  document.getElementById('next-btn').textContent = 'return to the start';
  document.getElementById('next-btn').onclick = () => location.reload();
}


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
let snake = [{ x: 160, y: 200 }];
let dx = gridSize;
let dy = 0;
let food = getRandomFood();
let score = 0;

// Load images
const snakeHeadImg = new Image();
snakeHeadImg.src = "snake-head.png";

const snakeBodyImg = new Image();
snakeBodyImg.src = "snake-body.png";

const foodImg = new Image();
foodImg.src = "apple.png";

const bgImg = new Image();
bgImg.src = "bg-checker.png";

// Load sounds
const eatSound = new Audio("../assets/sounds/eat.mp3");
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");

function draw() {
  // Draw background
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    const part = snake[i];
    const img = i === 0 ? snakeHeadImg : snakeBodyImg;
    ctx.drawImage(img, part.x, part.y, gridSize, gridSize);
  }

  // Draw food
  ctx.drawImage(foodImg, food.x, food.y, gridSize, gridSize);
}

function update() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Game over conditions
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    gameOverSound.play();
    alert("Game Over! Your score: " + score);
    resetGame();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    eatSound.play();
    updateScoreDisplay();
    food = getRandomFood();
  } else {
    snake.pop();
  }

  draw();
}

function getRandomFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
    y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
  };
}

function changeDirection(e) {
  const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
  switch (e.keyCode) {
    case LEFT: if (dx === 0) { dx = -gridSize; dy = 0; } break;
    case UP: if (dy === 0) { dx = 0; dy = -gridSize; } break;
    case RIGHT: if (dx === 0) { dx = gridSize; dy = 0; } break;
    case DOWN: if (dy === 0) { dx = 0; dy = gridSize; } break;
  }
}

function resetGame() {
  snake = [{ x: 160, y: 200 }];
  dx = gridSize;
  dy = 0;
  food = getRandomFood();
  score = 0;
  updateScoreDisplay();
}

function goHome() {
  window.location.href = "index.html";
}

function updateScoreDisplay() {
  document.getElementById("score").textContent = `🍎 ${score}`;
}

document.addEventListener("keydown", changeDirection);
setInterval(update, 150);
draw();
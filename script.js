const words = [
  "hello", "banana", "keyboard", "car", "apple",
  "school", "javascript", "code", "laptop", "game",
  "fast", "word", "typing", "score", "speed"
  "Hello", "Banana", "Keyboard", "Car", "Apple",
  "School", "Javascript", "Code", "Laptop", "Game",
  "Fast", "Word", "Typing", "Score", "Speed"
];

let time = 10;
let score = 0;
let currentWord = "";
let timer;

const wordElement = document.getElementById("word");
const input = document.getElementById("input");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const message = document.getElementById("message");

function showNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordElement.textContent = currentWord;
}

function startGame() {
  showNewWord();
  input.value = "";
  score = 0;
  time = 10;
  scoreElement.textContent = score;
  timeElement.textContent = time;

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  time--;
  timeElement.textContent = time;
  if (time === 0) {
    clearInterval(timer);
    message.textContent = "Game Over! Your score: " + score;
    wordElement.textContent = "";
  }
}

input.addEventListener("input", () => {
  if (input.value === currentWord) {
    score++;
    scoreElement.textContent = score;
    input.value = "";
    showNewWord();
    time = 10; // reset time
  }
});

window.addEventListener("load", startGame);

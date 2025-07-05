const words = [
  "hello", "banana", "keyboard", "car", "apple",
  "school", "javascript", "code", "laptop", "game",
  "fast", "word", "typing", "score", "speed",
  "Hello", "Banana", "Keyboard", "Car", "Apple",
  "School", "Javascript", "Code", "Laptop", "Game",
  "Fast", "Word", "Typing", "Score", "Speed"
];

let time = 10;
let score = 0;
let currentWord = "";
let timer;

document.addEventListener("DOMContentLoaded", () => {
  const wordElement = document.getElementById("word");
  const input = document.getElementById("input");
  const timeElement = document.getElementById("time");
  const scoreElement = document.getElementById("score");
  const message = document.getElementById("message");
  const startBtn = document.getElementById("start-btn");

  function showNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordElement.textContent = currentWord;
  }

  function updateTime() {
    time--;
    timeElement.textContent = time;
    if (time === 0) {
      clearInterval(timer);
      input.disabled = true;
      message.textContent = "Game Over! Your score: " + score;
      wordElement.textContent = "";
    }
  }

  function startGame() {
    score = 0;
    time = 10;
    input.value = "";
    input.disabled = false;
    input.focus();
    message.textContent = "";
    scoreElement.textContent = score;
    timeElement.textContent = time;
    showNewWord();
    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
  }

  input.addEventListener("input", () => {
    if (input.value.trim() === currentWord) {
      score++;
      scoreElement.textContent = score;
      input.value = "";
      showNewWord();
      time = 10;
      timeElement.textContent = time;
    }
  });

  startBtn.addEventListener("click", startGame);
});

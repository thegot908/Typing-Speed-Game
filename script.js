const words = [
  "score", "speed",
"Hello", 
 "banana", "keyboard", "car", "apple",
  "school", "javascript", "code", "laptop", "game",
  "fast", "word", "typing", "score", "speed",
  "Hello", "Banana", "Keyboard", "Car", "Apple",
  "School", "Javascript", "Code", "Laptop", "Game",
  "Fast", "Word", "Typing", "Score", "Speed"
  "sun", "moon", "river", "tree", "mountain",
"computer", "python", "keyboard", "mouse", "screen",
"city", "village", "school", "teacher", "student",
"phone", "tablet", "camera", "music", "video",
"Sun", "Moon", "River", "Tree", "Mountain",
"Computer", "Python", "Keyboard", "Mouse", "Screen",
"City", "Village", "School", "Teacher", "Student",
"Phone", "Tablet", "Camera", "Music", "Video"
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
<script>
  const words = ["cat", "dog", "sun", "code", "game", "sky"];
  let score = 0;
  let time = 10;
  let timerInterval;

  const wordDisplay = document.getElementById("word");
  const input = document.getElementById("input");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const startBtn = document.getElementById("start");

  function startGame() {
    score = 0;
    time = 10;
    input.value = "";
    input.disabled = false;
    input.focus();
    showNewWord();
    updateScore();
    updateTime();

    timerInterval = setInterval(() => {
      time--;
      updateTime();
      if (time === 0) {
        clearInterval(timerInterval);
        input.disabled = true;
        alert("Time's up! Your score: " + score);
      }
    }, 1000);
  }

  function showNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.textContent = words[randomIndex];
  }

  function updateScore() {
    scoreDisplay.textContent = score;
  }

  function updateTime() {
    timeDisplay.textContent = time + "s";
  }

  input.addEventListener("input", () => {
    if (input.value === wordDisplay.textContent) {
      score++;
      input.value = "";
      showNewWord();
      updateScore();
    }
  });

  startBtn.addEventListener("click", startGame);
</script>

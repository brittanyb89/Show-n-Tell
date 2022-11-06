// Start button will take user to next page with test questions
const startbtn = document.querySelector("button");

startbtn.addEventListener("click", () => {
  window.location.href="./pages/page1-Quiz/index.html";
  console.log(button)
});

// Once test is started, first question appears with choices, and timer starts
// Variables for time and score
const timer = document.querySelector("quizTimer");
const secondsRemaining = 75;
const highScore = document.querySelector("#score");

// Question section
const questionNum1 = document.querySelector("#question1");

// Number of questions answered
const questionCount = 0;

// User initals input
const initialsInput = document.querySelector("#initals");

// final score section
const highScores = document.querySelector("#highscores");
const newScores = document. querySelector("#new-score");
const newScore= [];

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

// Answer buttons
const answerbtns = document.querySelectorAll("answerbtns");
const answerbtn1 = document.querySelector("#answer1");
const answerbtn2 = document.querySelector("#answer2");
const answerbtn3 = document.querySelector("#answer3");

// Question and answer objects
const questions = [
  {
    question:"Commonly used data types do NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswers: "2"
  },
  {
    // Question #1
    question: " ____ is a high-level dynamic programming language that allows users to interact with websites."
    answers: ["1. Booleans", "2. JavaScript", "3. CSS", "4. Node.js"],
    correctAnswers: "2"
  },
  { // Question #2
    question: "What method is used to output a message to web console by adding an argument?"
    answers: ["1. Git method", "2. CSS method", "3. console.log method", "4. Javascript method"],
    correctAnswers: "3"
  },
  {
    // Question #3
    question: "_____ ____ are used to create conditions and control how a program behaves when certain things happen. They are usually denoted true and false inside of quotes."
    answers: ["1. Boolean values", "2. String values", "3. Node values", "4. Number values"],
    correctAnswers: "1"
  }
];



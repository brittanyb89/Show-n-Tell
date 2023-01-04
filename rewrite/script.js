const startBtn = document.getElementById("startBtn");
const button = document.querySelector("input");
const gameOver = document.getElementById("gameOver");
const quizStart = document.getElementById("startquiz");
// const results = document.getElementById("questionResults");
// const finalScore = document.getElementById("final");
const saveBtn = document.getElementById("saveBtn");
const initials = document.getElementById("initials");
const timer = document.getElementById("quizTimer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const intro = document.getElementById("intro");
// const quizEl = document.querySelector(".quiz");
const endingscreen = document.getElementById("endingscreen");
const scoreInitials = document.getElementById("scoreInitials");

let currentQuestion = 0;
let submitted = false;
const questionNum = 0;
const correctAnswer = [2, 2, 1, 3];
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

// Quiz questions
let quizQuestions = [
  {
    question:
      " ____ is a high-level dynamic programming language that allows users to interact with websites.",
    choices: ["Booleans", "JavaScript", "CSS", "Node.js"],
    answer: "JavaScript",
  },
  {
    question: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "_____ ____ are used to create conditions and control how a program behaves when certain things happen. They are usually denoted true and false inside of quotes.",
    choices: [
      "Boolean values",
      "String values",
      "Node values",
      "Number values",
    ],
    answer: "Boolean values",
  },
  {
    question:
      "What method is used to output a message to web console by adding an argument?",
    choices: [
      "Git method",
      "CSS method",
      "console.log method",
      "Javascript method",
    ],
    answer: "console.log method",
  },
];

const finalQuestionIndex = quizQuestions.length;
let currentQuestionIndex = 0;
let timeLeft = 75;
let score = 0;
let clickedAnswer = "";

function showScore() {
  endingscreen.style.display = "block";
  quizStart.style.display = "none";
  gameOver.style.display = "block";
}

// start timer
document.getElementById("startBtn").addEventListener("click", function () {
  let timeLeft = 75;

  let timer = setInterval(function () {
    document.getElementById("countDown").innerHTML =
      timeLeft + "&nbsp" + "seconds remaining";
    timeLeft -= 1;
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("countDown").innerHTML = "Time is up!";
    } else if (currentQuestionIndex === finalQuestionIndex) {
      clearInterval(timer);
      document.getElementById("countDown").innerHTML = "Finish!";
    } else if (clickedAnswer !== correctAnswer) {
      timeLeft -= 15;
    }
  }, 1000);
});

// start quiz, removes intro, and displays quiz
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("startquiz").style.display = "block";
  document.getElementById("intro").style.display = "none";
});

function quizQuestion1(event) {
  startQuiz.style.display = "none";
  generateQuizQuestion();
}
//  function to generate quiz questions
function generateQuizQuestion() {
  gameOver.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }
  let currentQuestion = quizQuestions[currentQuestionIndex];
  questions.innerHTML = currentQuestion.question;
  console.log(currentQuestion);
  answer1.innerHTML = currentQuestion.choices[0];
  answer2.innerHTML = currentQuestion.choices[1];
  answer3.innerHTML = currentQuestion.choices[2];
  answer4.innerHTML = currentQuestion.choices[3];
}

// checks the answer to each question
function checkAnswer(button) {
  correct = quizQuestions[currentQuestionIndex].answer;
  const clickedAnswer = button.innerHTML;
  console.log(clickedAnswer);
  if (
    clickedAnswer === correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    score++;
    alert("Correct!");
    currentQuestionIndex++;
    generateQuizQuestion();
  } else if (
    clickedAnswer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    alert("Incorrect!");
    currentQuestionIndex++;
    generateQuizQuestion();
  } else {
    showScore();
  }
}

// set function to add score
function saveScore() {
  const newName = initials.value;
  console.log(newName);
  highScores.push({ initials: newName, score: score });
  localStorage.setItem("highscores", JSON.stringify(highScores));
  for (let i = 0; i < highScores.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${highScores[i].initials}: ${highScores[i].score}`;
    scoreInitials.append(li);
  }
}

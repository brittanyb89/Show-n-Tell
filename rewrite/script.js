const startBtn = document.getElementById("startBtn");
const button = document.querySelector("input");
const gameOver = document.getElementById("gameOver");
const quizStart = document.getElementById("startquiz");
const results = document.getElementById("questionResults");
const finalScore = document.getElementById("final");
const save = document.getElementById("saveBtn");
const initials = document.getElementById("initials");
const timer = document.getElementById("quizTimer");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const intro = document.getElementById("intro");
const quizEl = document.querySelector(".quiz");
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
const timeLeft = 75;
let score = 0;

function showScore() {
  endingscreen.style.display = "block";
  quizStart.style.display = "none";
  gameOver.style.display = "block";
}

// start quiz
startBtn.addEventListener("click", startQuiz);

// add click event to button and hides start button
function startQuiz(event) {
  intro.style.display = "none";
  quizStart.style.display = "block";
  generateQuizQuestion();
}

// Start Quiz function starts timer and displays the first quiz question.
function quizQuestion1(event) {
  startQuiz.style.display = "none";
  generateQuizQuestion();
}

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

//   setTimeout( () => {
//     p.style.display = "none";
//   }, 1000);

// function handleClick(event) {
//   const isCorrectAnswer = isCorrect(event);

//   renderQuestionResult (isCorrectAnswer);
//   if (!isCorrectAnswer) {
//     TiME_LIMIT -= 15;
//   }
//   if (currentQuestionIndex < questions.length - 1) {
//     currentQuestionIndex++;renderNxtQuestion();
//   } else {
//     renderEndScreen();
//   }
// }

// answerBtn1.forEach(item => {
//   item.addEventListener('click', checkAnswer);
// });

// div correct/wrong
// const results = document.querySelector("#results");

// Once test is started, first question appears with choices, and timer starts
// Variables for time and score
// $("#startClock").click(function () {
//   let counter = 5;
//   setInterval(function () {
//     counter--;
//     if (counter >= 0) {
//       span = document.getElementById("seconds");
//       span.innerHTML = counter;
//     }
//     if (counter === 0) {
//       alert('Time is up!');
//       clearInterval(counter);
//     }
//   }, 1000);
// });
// const timer = document.querySelector("quizTimer");
// const secondsRemaining = 75;

// // Function for timer
// function setTimer() {
//   const timerInterval = setInterval( () => {
//     secondsRemaining--;
//     timer.textContent = `Time:${secondsRemaining}s`;

//     if (secondsRemaining === 0 || questionCount === questions.length) {
//       clearInterval(timerInterval);
//       questionsNum1.style.display = "none";
//       finalAns.style.display = "block";
//       highScore.textContent = secondsRemaining;

//     }
//   }, 1000);
// }

// Quiz starts with timer and question
// function startbtn() {
//   questionNum1.style.display = "block";
//   questionCount = 0;

//   setTimer();
//   setQuestion(questionCount);
// }

// function clearScores() {
//   localStorage.clear();
//   highScore.innerHTML="";
// }

// submitBtn.addEventListener('click', addScore);

// viewScore.addEventListener('click', () => {
//   if (newScore.style.display === 'none') {
//     newScore.style.display = 'block';
//   } else if (newScore.style.display === 'block') {newScore.style.display = 'none';
// }else {
//   return alert ("No new high scores!");
// }
// });
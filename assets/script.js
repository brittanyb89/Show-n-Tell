// Start button will take user to next page with test questions
// const button = document.querySelector("start");

// event listener to activate start button
// button.addEventListener('click', () => ) {
//   window.location.href="/../pages/page1-Quiz/quiz.html";
//   console.log("button")
// } );
// };

// Once test is started, first question appears with choices, and timer starts
// Variables for time and score
// const timer = document.querySelector("quizTimer");
// const secondsRemaining = 75;

// Question section
// const questions1 = document.querySelector("#questions1");
// const question1 = document.querySelector("#question1");

// Number of questions answered
// const questionCount = 0;

// div correct/wrong
// const results = document.querySelector("#results");

// section for final section
// const final = document.querySelector("#final");

// User initals input
// const initialsInput = document.querySelector("#initals");

// final score section
// const highScores = document.querySelector("#high-scores");
// const scoreList = document. querySelector("#score-list");
// const newScore= [];


// const backBtn = document.querySelector("back");
// const nextBtn = document.querySelector("next")

// Answer buttons
// const answerbtns = document.querySelectorAll("answerbtns");
// const answerBtn1 = document.querySelector("#answer1");
// const answerBtn2 = document.querySelector("#answer2");
// const answerBtn3 = document.querySelector("#answer3");
// const answerBtn4 = document.querySelector("#answer4");

// submit, finish, and view my score buttons
// const saveBtn = document.querySelector("save");
// const finishBtn= document.querySelector("finish");
// const viewScore = document.querySelector("view_my_score")

// start quiz
// export const quiz = document.getElementById("quiz");
// quiz.addEventListener("click", handleclick);




// Question and answer objects
// const questions = [
//   {
//     question:"Commonly used data types do NOT include:",
//     answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
//     correctAnswers: "2"
//   },
//   {
    // Question #1
  //   question: " ____ is a high-level dynamic programming language that allows users to interact with websites."
  //   answers: ["1. Booleans", "2. JavaScript", "3. CSS", "4. Node.js"],
  //   correctAnswers: "2"
  // },
  // { // Question #2
  //   question: "What method is used to output a message to web console by adding an argument?"
  //   answers: ["1. Git method", "2. CSS method", "3. console.log method", "4. Javascript method"],
  //   correctAnswers: "3"
  // },
  // {
    // Question #3
//     question: "_____ ____ are used to create conditions and control how a program behaves when certain things happen. They are usually denoted true and false inside of quotes."
//     answers: ["1. Boolean values", "2. String values", "3. Node values", "4. Number values"],
//     correctAnswers: "1"
//   }
// ];

// Function for timer
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

// function to set questions
// function setQuestion(id) {
//   if (id < questions.length) {
//     questionNum1.textContent = questions[id].question;
//     answerbtn1.textContent = questions [id].answers[0];
//     answerbtn2.textContent = questions [id].answers[1];
//     answerbtn3.textContent = questions [id].answers[2];
//     answerbtn4.textContent = questions [id].answers[3];
//   }
// }

// checks answer and move on to the question
// function checkAnswer(event) {
//   event.preventDefault();

//   correctWrong.style.display = "block";
//   const p = document.createElement("p");
//   correctWrong.appendChild(p);

//   setTimeout( () => {
//     p.style.display = "none";
//   }, 1000);

//   if (questions[questionCount].correctAnswers === event.target.value) {
//     p.textContent = "Correct!";
//   } else if (questions[questionCount].correctAnswers !== event.target.value) {
//     secondsRemaining = secondsRemaining - 10;
//     p.textContent = "Wrong!";
//   }
//   if (questionCount < questions.length) {
//     questionCount++;
//   }
//   setQuestion(questionCount);
// }

// set function to add score
// function addScore(event) {
//   event.preventDefault();

//   finalAns.style.display ='none';
//   newScore.style.display = 'block';

//   const init = initialsInput.value.toUpperCase();
//   highScore.push ({ initials: init, score: secondsRemaining});

//   highScore = highScore.ariaSort((a, b) => {
//     if (a.score > b.score) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });

//   highScore.innerHTML="";
//   for (let i = 0; i < highScore.length; i++) {
//     let li = document.createElement("li");
//     li.textContent = `${highScore[i].initials}: ${highScore[i].score}`;
//     highScore.append(li);
//   }

//   storeScores();
//   displayScores();
// }

// function storeScores() {
//   localStorage.setItem("highscores", JSON.stringify(highScore));
// }

// function displayScores() {
//   const storedHighScores = JSON.parse(localStorage.getItem("highScores"));
//   if(storedHighScores !== null) {
//     highScore = storedHighScores;
//   }
// }

// function clearScores() {
//   localStorage.clear();
//   highScore.innerHTML="";
// }

// answerBtn1.forEach(item => {
//   item.addEventListener('click', checkAnswer);
// });

// submitBtn.addEventListener('click', addScore);

// viewScore.addEventListener('click', () => {
//   if (newScore.style.display === 'none') {
//     newScore.style.display = 'block';
//   } else if (newScore.style.display === 'block') {newScore.style.display = 'none';
// }else {
//   return alert ("No new high scores!");
// }
// });
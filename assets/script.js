// HTML elements
const startBtn = document.getElementById("startBtn");
const button = document.querySelector("input");
const gameOver = document.getElementById("gameOver");
const quizStart = document.getElementById("startquiz");
// const startQuiz = document.getElementById("questions");
const results = document.getElementById("questionResults");
const finalScore = document.getElementById("final");
const save = document.getElementById("saveBtn");
const initials = document.getElementById("initials");
const timer = document.getElementById("quizTimer");
const  answer1= document.getElementById("1");
const  answer2= document.getElementById("2");
const  answer3= document.getElementById("3");
const  answer4= document.getElementById("4");
const  intro= document.getElementById("intro");
const quizEl = document.querySelector('.quiz');
let currentQuestion = 0;
let submitted = false;
const questionNum = 0;
const correctAnswer = [2, 2, 1, 3]

// Quiz questions
let quizQuestions = [{
  question: " ____ is a high-level dynamic programming language that allows users to interact with websites.",
  choices: ["1. Booleans", "2. JavaScript", "3. CSS", "4. Node.js"],
  answer: 'JavaScript',
},
{
  question: "Commonly used data types do NOT include:",
  choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  answer: 'booleans',
},
{
  question: "_____ ____ are used to create conditions and control how a program behaves when certain things happen. They are usually denoted true and false inside of quotes.",
  choices: ["1. Boolean values", "2. String values", "3. Node values", "4. Number values"],
  answer: 'Boolean values',
},
{
  question: "What method is used to output a message to web console by adding an argument?",
  choices: ["1. Git method", "2. CSS method", "3. console.log method", "4. Javascript method"],
  answer: 'console.log method'
}
];

const finalQuestionIndex = quizQuestions.length;
const currentQuestionIndex = 0;
const timeLeft = 75;
const score = 0;

// start quiz
startBtn.addEventListener("click", startQuiz);

// add click event to button and hides start button
function startQuiz (event) {
  intro.style.display = "none";
  quizStart.style.display = "block";
}

// sorts through array to generate questions and answers to quiz
function generateQuizQuestion(){
  gameOver.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex){
      return showScore();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  startBtn.innerHTML = "<p>" + currentQuestion.quizQuestions + "</p>";
  answer1.innerHTML = currentQuestion.choices;
  answer2.innerHTML = currentQuestion.choices;
  answer3.innerHTML = currentQuestion.choices;
  answer4.innerHTML = currentQuestion.choices;
};

// Start Quiz function starts timer and displays the first quiz question.
function quizQuestion1(event){
  gameOver.style.display = "none";
  startQuiz.style.display = "none";
  generateQuizQuestion();
}


// const answerBtns = document.getElementsByClassName("possibleAns");
// // ansBtn.addEventListener("click", handleClick);
// function pickedAns (event) {
//   console.log(this.value)
// }
// answerBtns.forEach(button =>{
//   button.addEventListener("click", pickedAns);
// })
// let answerBtns = document.getElementsByClassName("possibleAns");
//   answerBtns.forEach(function(button) {
//     button.addEventListener("click", pickedAns);
//   });

//   const selectedAns =[];

// let possibleAns = function () {
//   if (questionNum >= questions.length) {
//     return;
//   }
// }

// const selectedOption = parseInt(this.getAttribute ('onclick'));
// selectedAns.push(selectedOption);
// questionNum += 1;
// // update next question
// quizQuestions.textContent = questions[questionNum];
// displayQuestion(questionNum);

// for (var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener('click', clickOption);
// }
// button.addEventListener("click", function() {
//   timer();
//   displayQuestion(questionNum);
//   button.style.visibility = "hidden";
//   startBtn.style.visibility = "visible";
// });

// function to set questions
function quiz(id) {
  if (id < questions.length) {
    results.textContent = questions[id].question;
    answer1.textContent = questions [id].answers[0];
    answer2.textContent = questions [id].answers[1];
    answer3.textContent = questions [id].answers[2];
    answer4.textContent = questions [id].answers[3];
  }
}


function generateQuizQuestion(){
  gameOver.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
  }
  let currentQuestion = quizQuestions[currentQuestionIndex];
  questions.innerHTML = "quesAndAns" + currentQuestion.question;
  answer1.innerHTML = currentQuestion.choices;
  answer2.innerHTML = currentQuestion.choices;
  answer3.innerHTML = currentQuestion.choices;
  answer4.innerHTML = currentQuestion.choices;
}


// checks the answer to each question
// function checkAnswer(event) {
//   correct = quizQuestions[currentQuestionIndex].correctAnswer;

//   if (questions === correct && currentQuestionIndex !== finalQuestionIndex) {
//     score++;
//     alert("Correct!");
//     currentQuestionIndex++;
//     generateQuizQuestion();
//   } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
//     alert("Incorrect!");
//     currentQuestionIndex++;
//     generateQuizQuestion();
//   } else {
//     showScore();
//   }
// }


// checks answer and move on to the question
// function checkAnswer(event) {
//   event.preventDefault();
// }



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



// TODO: once I answer the question, the next question is presented

// TODO: for the wrong answer, time is decducted from clock

// TODO: game is over when all questions are answered or the timer reaches 0

// TODO: when game is over, save initials and score



// Number of questions answered
// const questionCount = 0;

// final score section
// const highScores = document.querySelector("#high-scores");
// const scoreList = document. querySelector("#score-list");
// const newScore= [];


// const backBtn = document.querySelector("back");
// const nextBtn = document.querySelector("next")

// submit, finish, and view my score buttons
// const saveBtn = document.querySelector("save");
// const finishBtn= document.querySelector("finish");
// const viewScore = document.querySelector("view_my_score")

// Quiz starts with timer and question
// function startbtn() {
//   questionNum1.style.display = "block";
//   questionCount = 0;

//   setTimer();
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



// submitBtn.addEventListener('click', addScore);

// viewScore.addEventListener('click', () => {
//   if (newScore.style.display === 'none') {
//     newScore.style.display = 'block';
//   } else if (newScore.style.display === 'block') {newScore.style.display = 'none';
// }else {
//   return alert ("No new high scores!");
// }
// });
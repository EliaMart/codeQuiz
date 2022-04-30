// Code Quiz


// Global Variables
var timerElement = document.querySelector(".timer-Count");
var quiz = document.querySelector(".quiz-Card");
var startButton = document.querySelector(".start-Button");
var questionEl = document.getElementById("#question-Card");
var answerEl1 = document.getElementById("option-1");
var answerEl2 = document.getElementById("option-2");
var answerEl3 = document.getElementById("option-3");
var answerEl4 = document.getElementById("option-4");
var logInput = document.querySelector("#initial-log");
var submitbutton = document.querySelector("#submitbttn");
var highScores = document.querySelector("#highscores");
var highScoresButton = document.querySelector("#hi-scores-button");
var questionCard = document.getElementById("question-Card");
var goBackButton = document.querySelector("#go-back");
var form = document.querySelector("#my-form");

var index = 0;
var timer;
var timerCount;

// questions, answers and correct answers in variable 
var questions = [
  {
      question: "Commonly used data types DO NOT include:",
      answers: [ 
          "strings", 
          "booleans", 
          "alerts", 
          "numbers"
      ],
      correctAnswer: "alerts"
  },
  {
      question: "The condition in an if / else statement is enclosed within ___.",
      answers:[
          "quotes", 
          "curley brackets", 
          "parenthesis", 
          "square brackets"
      ],
      correctAnswer: "parenthesis"
  },
  {
      question:"Arrays in Javascript can be used to store ___.",
      answers: [
          "numbers and strings", 
          "other arrays", 
          "booleans", 
          "all of the above"
      ],
      correctAnswer: "all of the above"
  },
  {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: [
          "JavaScript", 
          "terminal/bash", 
          "for loops", 
          "console.log"
      ],
      correctAnswer: "console.log"
  }
];

function clearAll() {
  quiz.style.display = "none";
  questionCard.style.display = "none";
  logInput.style.display = "none";
  highScores.style.display = "none";
}

function startQuiz () {
  clearAll();
  questionCard.style.display = "block";
  timerCount = 75;
  index= 0;

  loadQuestion(index);
  startTimer();
}

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      endQuiz();
    }
  }, 1000);
}

function loadQuestion(index) {
  document.getElementById("questionText").innerHTML = questions[index]["question"];
  answerEl1.innerHTML = questions[index]["answers"][0];
  answerEl2.innerHTML = questions[index]["answers"][1];
  answerEl3.innerHTML = questions[index]["answers"][2];
  answerEl4.innerHTML = questions[index]["answers"][3];

  answerEl1.addEventListener("click", answerQuestion);
  answerEl2.addEventListener("click", answerQuestion);
  answerEl3.addEventListener("click", answerQuestion);
  answerEl4.addEventListener("click", answerQuestion);
}

function answerQuestion (event) {
  var answered = event.target.innerHTML;
  if (answered === questions[index]["correctAnswer"]) {
    timerCount += 10
    console.log("Correct");
  } else {  
    timerCount -= 15;
    console.log("Incorrect");
  }
  index +=1;
  if (index <= 3) {
    loadQuestion(index);
  } else {
    clearInterval(timer);
    endQuiz();
  }
}

function endQuiz() {
  clearAll();
  logInput.style.display = "block"
  scoreMsg.textContent = "Your score is " + timerCount;
}



function showHighScores() {
  clearAll();
  highScores.style.display = "block";
//   renderHighScores();
}

// function renderHighScores() {
//   var score = localStorage.getItem("timerCount");
//   var inputInitials = localStorage.getItem("logInput");

//   logInput.textContent = inputInitials;
//   timerElement.textContent = score;
// };


function setAnswers() {
  timerElement.textContent = timerCount;
  localStorage.setItem("timerCount", timerCount);
}

function getAnswers() {
  var storedAnswers =  localStorage.setItem("timerCount", timerCount);
  // if (storedAnswers === null) {
  //   timerCount = 0;
  // } else {
    timerCount = storedAnswers;
// }
  timerElement.textContent = timerCount;
}

function showQuiz() {
  clearAll();
  quiz.style.display = "block";
}

function submitForm(event) {
  var input = event.target[0].value;
  event.target[0].value = '';
  console.log('Initials:', input);
  console.log('Score:', timerCount);
  event.preventDefault();
  clearAll();
  showHighScores();
  localStorage.setItem("timerCount", timerCount);
  localStorage.setItem("logInput", logInput);
}

function init() {
  startButton.addEventListener("click", startQuiz);
  highScoresButton.addEventListener("click", showHighScores);
  goBackButton.addEventListener("click", showQuiz);
  form.addEventListener("submit", submitForm);
  getAnswers();
  // renderHighScores();
}

init();




//   // localStorage.setItem("timerCount", timerCount;
//   // localStorage.setItem("logInput", logInput);
//   // renderHighScores();
// }


// function renderHighScores() {
//   var score = localStorage.getItem("score");
//   var inputInitials = localStorage.getItem("inputInitials");

// logInput.textContent = inputInitials;
// timerElement.textContent = score;
// }


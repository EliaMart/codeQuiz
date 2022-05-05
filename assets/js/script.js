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
var scoreIn = document.querySelector("#score-Initials");
var clearButton = document.querySelector("#clear-bttn");

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
      timerElement.style.display = "none";
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
  localStorage.setItem("timerCount", timerCount);
  console.log(timerCount);
}

function saveInitials(submitVal) {
  localStorage.setItem("Initials", submitVal);
  console.log(submitVal)
};

function showHighScores() {
  clearAll();
  highScores.style.display = "block"
  renderAnswers();
}



function renderAnswers() {
  var storedTime =  localStorage.getItem("timerCount");
  console.log(storedTime);
  storedTime = timerCount;

  var storedInitial = localStorage.getItem("Initials");
  submitVal = storedInitial;

  scoreIn.textContent = storedTime  + storedInitial;
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
  timerElement.style.display = "none";
  clearAll();
  showHighScores();
  saveInitials(input);
}

function clearScores () {
  scoreIn.style.display ="none";
  localStorage.clear();
}

function init() {
  startButton.addEventListener("click", startQuiz);
  highScoresButton.addEventListener("click", showHighScores);
  goBackButton.addEventListener("click", showQuiz);
  form.addEventListener("submit", submitForm);
  clearButton.addEventListener("click", clearScores)
  renderAnswers();
}

init();


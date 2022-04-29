// Code Quiz


// Global Variables
var timerElement = document.querySelector(".timer-Count")
var quiz = document.querySelector(".quiz-Card")
var startButton = document.querySelector(".start-Button")
var questionEl = document.getElementById("#question-Card")
var answerEl1 = document.getElementById("option-1")
var answerEl2 = document.getElementById("option-2")
var answerEl3 = document.getElementById("option-3")
var answerEl4 = document.getElementById("option-4")
var logInput = document.querySelector("#initial-log")
var submitbutton = document.querySelector("submitbttn")
var highscores = document.querySelector("#highscores")

var index = 0
var timer;
var timerCount;
var startQuiz;

// questions, answers and correct answers in variable 
var questions =  [ 
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
    correctAnswer: "consoloe.log"
},
];


// Function that starts game

function startQuiz () {
    document.getElementById("quiz-Card").style.display = "none";
    document.getElementById("question-Card").style.display = "block";
    timerCount = 75;
    index= 0;

    loadQuestion(index)
    startTimer()

};

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
      endQuiz();
    }

  }, 1000);
}


function loadQuestion(index) {
  document.getElementById("questionText").innerHTML = questions[index]["question"]
  answerEl1.innerHTML = questions[index]["answers"][0]
  answerEl2.innerHTML = questions[index]["answers"][1]
  answerEl3.innerHTML = questions[index]["answers"][2]
  answerEl4.innerHTML = questions[index]["answers"][3]

    answerEl1.addEventListener("click", answerQuestion)
    answerEl2.addEventListener("click", answerQuestion)
    answerEl3.addEventListener("click", answerQuestion)
    answerEl4.addEventListener("click", answerQuestion)
    

}

function answerQuestion (event) {
  console.log(event)
  var answered = event.target.innerHTML
  if (answered === questions[index]["correctAnswer"]) {
    timerCount += 10
    console.log("Correct");
 } else {  
   timerCount -= 15
   console.log("Incorrect");
  }
  index +=1 
  if (index <= 3) {
    loadQuestion(index)
  } else {
    endQuiz()

}}

function endQuiz () {
  document.getElementById("question-Card").style.display = "none"
  document.getElementById("initial-log").style.display = "block"
  scoreMsg.textContent = "Your score is " + timerCount;

  if (submitbutton ===) {
    document.getElementById("highscores").style.display = "block"
    document.getElementById("initial-log").style.display = "none"
  }

}

function setAnswers() {
   timerElement.textContent = timerCount;
    localStorage.setItem("timerCount", timerCount);

}


function getAnswers() {
    var storedAnswers =  localStorage.setItem("timerCount", timerCount);
    if(storedAnswers === null) {
      timerCount = 0
    } else {
        timerCount = storedAnswers;
    }
    timerElement.textContent = timerCount
}

function init () {
  getAnswers();
};

init();
// goBack.addEventlistener("click, startQuiz")

startButton.addEventListener("click", startQuiz)


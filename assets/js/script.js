// Code Quiz


// Global Variables
var timerElement = document.querySelector(".timer-Count")
var quiz = document.querySelector(".quiz-Card")
var startButton = document.querySelector(".start-Button")
var elements = document.querySelector("#question-Card")
var log = document.querySelector("#initial-log")

var timer;
var timerCount;
var startQuiz;
// var correctCounter =
// var wrongCounter =



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

};

function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (winQuiz && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        endQuiz();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      clearInterval(timer);
      endQuiz();
    }

  }, 1000);
}

function loadQuestion(index) {
  document.getElementById("questionText").innerHTML = questions[index]["question"]
  document.getElementById("option-1").innerHTML = questions[index]["answers"][0]
  document.getElementById("option-2").innerHTML = questions[index]["answers"][1]
  document.getElementById("option-3").innerHTML = questions[index]["answers"][2]
  document.getElementById("option-4").innerHTML = questions[index]["answers"][3]
}

function answerQuestion (event) {
  var answered = event.target.innerHTML
  if (answered === questions[index]["correctAnswer"]) {
    timerCount += 10
 } else {  
   timerCount -= 15
  }
  index +=1 
  if (index <= 4) {
    loadQuestion(index)
  } else
    document.getElementById("question-Card").style.display = "none";
    document.getElementById("inital-log").style.display = "block";

}

function endQuiz () {


};

function setCorrect() {
  //  .textContent = ;
    localStorage.setItem("correctCount", correctCounter);

}


function storedAnswers() {
    localStorage.setItem("",)


}
// goBack.addEventlistener()

  startButton.addEventListener("click", startQuiz)

// .textContent = ("Your final score is" + finalScore);


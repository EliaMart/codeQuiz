var startButton = document.querySelector(".start-Button")
var quiz = document.querySelector(".quiz-Card")
var timerElement = document.querySelector(".timer-Count")


// questions, answers in variable 
var questions =  [ 
{
    question1: "Commonly used data types DO NOT include:",
    answers: { 
        a: "strings", 
        b:"booleans", 
        c:"alerts", 
        d:"numbers"
    },
    correctAnswer: "c"
},
{
    question2: "The condition in an if / else statement is enclosed within ___.",
    answers:{
        a: "quotes", 
        b: "curley brackets", 
        c:"parenthesis", 
        d:"square brackets"},
    correctAnswer: "b"
},
{
    question3:"Arrays in Javascript can be used to store ___.",
    answers: { 
        a:"numbers and strings", 
        b: "other arrays", 
        c:"booleans", 
        d:"all of the above"},
    correctAnswer: "d"
},
{
    question4: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
        a:"JavaScript", 
        b:"terminal/bash", 
        c:"for loops", 
        d:"console.log"},
    correctAnswer: "d"
},
];

var timer;
var timerCount;
var startGame = true;


function startQuiz () {
    startGame = true;
    timerCount = 75;
};

function endQuiz () {

};

function winQuiz () {

};


function resetQuiz() {

}

function storedAnswers() {
    localStorage.setItem("",)

}
// goBack.addEventlistener()

  function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (winQuiz && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          quizOver();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

startQuiz();

startButton.addEventlistener("click", startQuiz)


// if answer = true 
// .textContent = Correct;
// else 
// .textContent = Incorrect;
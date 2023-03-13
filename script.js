// Linking variables to document
let timerEl = document.querySelector("#timer");
let timerText = document.querySelector("#timerText");
let highScoreBtn = document.querySelector("#highScoreBtn");
let mainPageContainer = document.querySelector(".mainPageContainer");
let startBtn = document.querySelector("#startQuizBtn");
let questionContainer = document.querySelector(".questionContainer");
let askedQuestion = questionContainer.children[0];
let answerBtn = document.querySelectorAll(".answerBtn");
let answerBtn1 = document.querySelector(".answerBtn1");
let answerBtn2 = document.querySelector(".answerBtn2");
let answerBtn3 = document.querySelector(".answerBtn3");
let answerBtn4 = document.querySelector(".answerBtn4");
let choiceA = document.querySelector(".choiceA");
let choiceB = document.querySelector(".choiceB");
let choiceC = document.querySelector(".choiceC");
let choiceD = document.querySelector(".choiceD");
let answerResponse = document.querySelector(".answerResponse");
let enterNameContainer = document.querySelector(".enterNameContainer");
let userNameInput = document.querySelector("#textInput");
let userScoreDisplay = document.querySelector(".userScoreDisplay");
let submitNameBtn = document.querySelector(".submitNameBtn");
let highScoresContainer = document.querySelector(".highScoresContainer");
let highScoresList = document.querySelector(".highScoresList");
let returnHomeBtn = document.querySelector(".returnHome");
let clearScoresBtn = document.querySelector(".clearScores");

// Setting up variables to track and display
// questionsAnswered variable helps to track if a user times out before answering questions and resets to 0 to ensure on the next play through they don't get pulled to the name entry screen prematurely
let userScore = 0;
let questionsAnswered = 0;
let userName = "";
const highScores = [];

// Setting up object array to hold questions, answers, and correct answers
const questionBank = [
  (question1 = {
    question: "Commonly used data types do NOT include:",
    A: "A: strings",
    B: "B: booleans",
    C: "C: alerts",
    D: "D: numbers",
    Answer: "C: alerts",
  }),
  (question2 = {
    question: "The condition in an if/else statement is enclosed with _____?",
    A: "A: quotes",
    B: "B: curly brackets",
    C: "C: parenthesis",
    D: "D: square brackets",
    Answer: "C: parenthesis",
  }),
  (question3 = {
    question: "Arrays in Javascript can be used to store ______.",
    A: "A: numbers and strings",
    B: "B: booleans",
    C: "C: other arrays",
    D: "D: all of the above",
    Answer: "D: all of the above",
  }),
  (question4 = {
    question:
      "String values must be enclosed with _____ when being assigned to variables.",
    A: "A: commas",
    B: "B: curly brackets",
    C: "C: quotes",
    D: "D: parenthesis",
    Answer: "C: quotes",
  }),
  (question5 = {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    A: "A: Javascript",
    B: "B: for loops",
    C: "C: terminal/bash",
    D: "D: console.log",
    Answer: "D: console.log",
  }),
];

// setting function to stop the countdown on call
function stopTimer() {
  clearInterval(startTimer());
}

// Setting countdown function, which will be called on click of the start button.
let timeLeft = 60;

function startTimer() {
  const countdown = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (questionsAnswered === 5) {
      clearInterval(countdown);
    } else if (timeLeft === 0 || timeLeft < 0) {
      clearInterval(countdown);
      timesUp();
    }
  }, 1000);
}

// setting function to stop the game once the timer is up
function timesUp() {
  alert("Time is up! Let's see how you did. ");
  quizOver();
}

// setting function to be called on click of the retund home button, located on the high scores page
function goHome() {
  highScoresContainer.style.display = "none";
  mainPageContainer.style.display = "flex";
  questionsAnswered = 0;
  userScore = 0;
}

// setting function to clear the list of scores on the high score page
function clearScores() {
  highScoresList.innerHTML = "";
  highScores.length = 0;
}

// setting function to be called on name enter that will compund the user info into one string and post it to the high scores list
function postScore() {
  userName = userNameInput.value;
  let highScore = { userName, userScore };
  highScores.push(highScore);
  highScores.sort((a, b) => b.userScore - a.userScore);
  highScoresList.innerHTML = "";

  for (let i = 0; i < highScores.length; i++) {
    highScoresList.innerHTML +=
      "<li>" +
      highScores[i].userName +
      ": " +
      highScores[i].userScore +
      "</li>";
  }

  enterNameContainer.style.display = "none";
  highScoresContainer.style.display = "block";
  mainPageContainer.style.display = "none";
  clearScoresBtn.addEventListener("click", clearScores);
}

// setting function to move user to name entry page once the quiz is over or time runs out
function quizOver() {
  questionContainer.style.display = "none";
  enterNameContainer.style.display = "block";
  answerResponse.innerText = "";
  userScoreDisplay.innerText = userScore;
  submitNameBtn.addEventListener("click", postScore);
  answerBtn1.removeEventListener("click", checkAnswer5);
  answerBtn2.removeEventListener("click", checkAnswer5);
  answerBtn3.removeEventListener("click", checkAnswer5);
  answerBtn4.removeEventListener("click", checkAnswer5);
  answerBtn1.addEventListener("click", checkAnswer1);
  answerBtn2.addEventListener("click", checkAnswer1);
  answerBtn3.addEventListener("click", checkAnswer1);
  answerBtn4.addEventListener("click", checkAnswer1);
}

// setting empty variables to hold delays until next screen after question answer
let delayQ2;
let delayQ3;
let delayQ4;
let delayQ5;
let delayFinal;

// the following run of functions checks the answer to the current question, adjusts the score/time accordingly, provides feedback on if answer was correct, and then changes the question after a short delay.
function checkAnswer1() {
  if (this.innerText == questionBank[0].Answer) {
    answerResponse.innerText = "Correct! :)";
    questionsAnswered++;
    userScore += 20;
    delayQ2 = setTimeout(function () {
      moveToQuestion2();
    }, 1000);
  } else {
    answerResponse.innerText = "Sorry, that's not correct! :(";
    questionsAnswered++;
    timeLeft -= 10;
    userScore -= 10;
    delayQ2 = setTimeout(function () {
      moveToQuestion2();
    }, 1000);
  }
}

function checkAnswer2() {
  if (this.innerText == questionBank[1].Answer) {
    answerResponse.innerText = "Correct! :)";
    questionsAnswered++;
    userScore += 20;
    delayQ3 = setTimeout(function () {
      moveToQuestion3();
    }, 1000);
  } else {
    answerResponse.innerText = "Sorry, that's not correct! :(";
    questionsAnswered++;
    timeLeft -= 10;
    userScore -= 10;
    delayQ3 = setTimeout(function () {
      moveToQuestion3();
    }, 1000);
  }
}

function checkAnswer3() {
  if (this.innerText == questionBank[2].Answer) {
    answerResponse.innerText = "Correct! :)";
    questionsAnswered++;
    userScore += 20;
    delayQ4 = setTimeout(function () {
      moveToQuestion4();
    }, 1000);
  } else {
    answerResponse.innerText = "Sorry, that's not correct! :(";
    questionsAnswered++;
    timeLeft -= 10;
    userScore -= 10;
    delayQ4 = setTimeout(function () {
      moveToQuestion4();
    }, 1000);
  }
}

function checkAnswer4() {
  if (this.innerText == questionBank[3].Answer) {
    answerResponse.innerText = "Correct! :)";
    questionsAnswered++;
    userScore += 20;
    delayQ5 = setTimeout(function () {
      moveToQuestion5();
    }, 1000);
  } else {
    answerResponse.innerText = "Sorry, that's not correct! :(";
    questionsAnswered++;
    timeLeft -= 10;
    userScore -= 10;
    delayQ5 = setTimeout(function () {
      moveToQuestion5();
    }, 1000);
  }
}

function checkAnswer5() {
  if (this.innerText == questionBank[4].Answer) {
    answerResponse.innerText = "Correct! :)";
    questionsAnswered++;
    userScore += 20;
    delayFinal = setTimeout(function () {
      quizOver();
    }, 1000);
  } else {
    answerResponse.innerText = "Sorry, that's not correct! :(";
    questionsAnswered++;
    timeLeft -= 10;
    userScore -= 10;
    delayFinal = setTimeout(function () {
      quizOver();
    }, 1000);
  }
}

// the following run of functions move to question screen, set the content for each question, and then reset the event listeners to allow to move to the next question.
function startQuiz() {
  timeLeft = 60;
  userScore = 0;
  questionsAnswered = 0;
  document.querySelector("#timerText").style.visibility = "visible";
  startTimer();
  mainPageContainer.style.display = "none";
  questionContainer.style.display = "block";
  askedQuestion.innerText = questionBank[0].question;
  answerBtn1.innerText = questionBank[0].A;
  answerBtn2.innerText = questionBank[0].B;
  answerBtn3.innerText = questionBank[0].C;
  answerBtn4.innerText = questionBank[0].D;
}

function moveToQuestion2() {
  askedQuestion.innerText = questionBank[1].question;
  answerBtn1.innerText = questionBank[1].A;
  answerBtn2.innerText = questionBank[1].B;
  answerBtn3.innerText = questionBank[1].C;
  answerBtn4.innerText = questionBank[1].D;
  answerResponse.innerText = "";

  answerBtn1.addEventListener("click", checkAnswer2);
  answerBtn2.addEventListener("click", checkAnswer2);
  answerBtn3.addEventListener("click", checkAnswer2);
  answerBtn4.addEventListener("click", checkAnswer2);
  answerBtn1.removeEventListener("click", checkAnswer1);
  answerBtn2.removeEventListener("click", checkAnswer1);
  answerBtn3.removeEventListener("click", checkAnswer1);
  answerBtn4.removeEventListener("click", checkAnswer1);
}

function moveToQuestion3() {
  askedQuestion.innerText = questionBank[2].question;
  answerBtn1.innerText = questionBank[2].A;
  answerBtn2.innerText = questionBank[2].B;
  answerBtn3.innerText = questionBank[2].C;
  answerBtn4.innerText = questionBank[2].D;
  answerResponse.innerText = "";

  answerBtn1.addEventListener("click", checkAnswer3);
  answerBtn2.addEventListener("click", checkAnswer3);
  answerBtn3.addEventListener("click", checkAnswer3);
  answerBtn4.addEventListener("click", checkAnswer3);
  answerBtn1.removeEventListener("click", checkAnswer2);
  answerBtn2.removeEventListener("click", checkAnswer2);
  answerBtn3.removeEventListener("click", checkAnswer2);
  answerBtn4.removeEventListener("click", checkAnswer2);
}

function moveToQuestion4() {
  askedQuestion.innerText = questionBank[3].question;
  answerBtn1.innerText = questionBank[3].A;
  answerBtn2.innerText = questionBank[3].B;
  answerBtn3.innerText = questionBank[3].C;
  answerBtn4.innerText = questionBank[3].D;
  answerResponse.innerText = "";

  answerBtn1.addEventListener("click", checkAnswer4);
  answerBtn2.addEventListener("click", checkAnswer4);
  answerBtn3.addEventListener("click", checkAnswer4);
  answerBtn4.addEventListener("click", checkAnswer4);
  answerBtn1.removeEventListener("click", checkAnswer3);
  answerBtn2.removeEventListener("click", checkAnswer3);
  answerBtn3.removeEventListener("click", checkAnswer3);
  answerBtn4.removeEventListener("click", checkAnswer3);
}

function moveToQuestion5() {
  askedQuestion.innerText = questionBank[4].question;
  answerBtn1.innerText = questionBank[4].A;
  answerBtn2.innerText = questionBank[4].B;
  answerBtn3.innerText = questionBank[4].C;
  answerBtn4.innerText = questionBank[4].D;
  answerResponse.innerText = "";

  answerBtn1.addEventListener("click", checkAnswer5);
  answerBtn2.addEventListener("click", checkAnswer5);
  answerBtn3.addEventListener("click", checkAnswer5);
  answerBtn4.addEventListener("click", checkAnswer5);
  answerBtn1.removeEventListener("click", checkAnswer4);
  answerBtn2.removeEventListener("click", checkAnswer4);
  answerBtn3.removeEventListener("click", checkAnswer4);
  answerBtn4.removeEventListener("click", checkAnswer4);
}

// adds initial event listeners to start the quiz and check the first answer
startBtn.addEventListener("click", startQuiz);
answerBtn1.addEventListener("click", checkAnswer1);
answerBtn2.addEventListener("click", checkAnswer1);
answerBtn3.addEventListener("click", checkAnswer1);
answerBtn4.addEventListener("click", checkAnswer1);

highScoreBtn.addEventListener("click", () => {
  mainPageContainer.style.display = "none";
  highScoresContainer.style.display = "flex";
});
returnHomeBtn.addEventListener("click", goHome);

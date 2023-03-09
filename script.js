let timerEl = document.querySelector("#timer");
let highScoreBtn = document.querySelector("highScoreBtn");
let mainPageContainer = document.querySelector(".mainPageContainer");
let startBtn = document.querySelector("#startQuizBtn");
let questionContainer = document.querySelector(".questionContainer");
let askedQuestion = questionContainer.children[0];
//! start linking answer buttons down...

function countdown() {
  let timeLeft = 60;

  let countdown = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(countdown);
      timesUp();
    }
  }, 1000);
}

function timesUp() {
  alert("Time is up! Let's see how you did. ");
}

//* this is the initial starting function. dont delete
// countdown();
//* Look into setTimeout() method.

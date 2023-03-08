let timerEl = document.querySelector("#timer");






function countdown() {
    let timeLeft = 60;

    let countdown = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdown);
            timesUp();
        }
    }, 1000)
}

function timesUp() {
    alert("Time is up! Let's see how you did. ")
}

//* this is the initial starting function. dont delete
// countdown();
//* Look into setTimeout() method. 
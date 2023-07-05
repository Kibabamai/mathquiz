let input = document.getElementsByTagName("input")[0];
let subtraction = document.getElementsByClassName("subtraction")[0];
let addition = document.getElementsByClassName("addition")[0];
let p = document.getElementsByClassName("paragraph")[0];
let multiplication = document.getElementsByClassName("multiplication")[0];
let division = document.getElementsByClassName("division")[0];
let sign = "+";
let time = document.getElementsByClassName("time")[0];
let seconds = 60;
let gameInterval = "";
let score = document.getElementsByClassName("score")[0];
let schet = 0;
let correct, mathRandom, mathRandom2, exercise;
let canPlay = false;

function primer() {
  if (sign == "/") {
    correct = Math.floor(Math.random() * 21);
    mathRandom2 = Math.floor(Math.random() * 21);
    mathRandom = correct * mathRandom2;
    exercise = mathRandom + sign + mathRandom2;
}  else if (sign == "*") {
    mathRandom = Math.floor(Math.random() * 11)
    mathRandom2 = Math.floor(Math.random() * 101)
    exercise = mathRandom + sign + mathRandom2;
    correct = eval(exercise);
}

else {
    mathRandom = Math.floor(Math.random() * 100);
    mathRandom2 = Math.floor(Math.random() * 100);
    exercise = mathRandom + sign + mathRandom2;
    correct = eval(exercise);
    
  }

  p.innerHTML = exercise;
}
function proverka(event) {
  event.preventDefault();
  if (canPlay) {
    if (input.value == correct) {
      schet = schet + 1;
    }
    else{

    }
    primer();
    score.innerHTML = "Score: " + schet;
    input.value = "";
  }
}
input.onclick = function (event) {
  console.log(1);
};
subtraction.onclick = function (event) {
  sign = "-";
  primer();
  startTimer();
};

addition.onclick = function (event) {
  sign = "+";
  primer();
  startTimer();
};
multiplication.onclick = function (event) {
  sign = "*";
  primer();
  startTimer();
};

division.onclick = function (event) {
  sign = "/";
  primer();
  startTimer();
};

function startTimer() {
  schet = 0;
  seconds = 60;
  score.innerHTML = "Score: " + 0;
  canPlay = true;

  clearInterval(gameInterval);
  gameInterval = setInterval(function () {
    seconds = seconds - 1;
    time.innerHTML = "time: " + seconds;
    if (seconds == 0) {
      clearInterval(gameInterval);
      canPlay = false;
    }
  }, 1000);
}

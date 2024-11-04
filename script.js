let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (guess === secretNumber) {
    console.log("you win");
    document.querySelector(".message").textContent = "you win";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    console.log("too low");
    document.querySelector(".message").textContent = "too low";
    score--;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  let score = 20;
  let highscore = 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".number").textContent = "?";
});

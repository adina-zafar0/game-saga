let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

let genRanChoice = () => {
  const options = ["paper", "scissor", "rock"];
  let ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

let drawGame = () => {
  msg.innerText = "game was draw! , play again";
  msg.style.backgroundColor = "blue";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#317e2a";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lose ! computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  genRanChoice();
  let compChoice = genRanChoice();
  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
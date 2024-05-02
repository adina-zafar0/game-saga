let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector(".newGame");
let msgCon = document.querySelector(".msgCon");
let msg = document.querySelector(".msg");


let turnO = true;
let winingPattern = [
  [0, 3, 6],
  [0, 1, 2],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame = ()=> {
  turnO = true;
  enableBtn();
  msgCon.classList.add("hide");
}


const disableBtn = ()=> {
 for(let box of boxes){
   box.disabled=true;
 }
}


const enableBtn = ()=> {
 for(let box of boxes){
   box.disabled=false;
   box.innerText="";
 }
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
    }
    checkWinner();
  });
});



const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgCon.classList.remove("hide");
  disableBtn();
};



const checkWinner = () => {
  for (let patterns of winingPattern) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log(pos1val, "is winner");
        showWinner(pos1val);
      }
    }
  }
};


resetBtn.addEventListener("click" , resetGame);
newGameBtn.addEventListener("click" , resetGame);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let gameName = document.getElementById("gameName");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBoxes();
        console.log("And Winner is Mr.", pos1Val);
        gameName.innerText = "winner is mr." + pos1Val;
        resetBtn.innerText = "Play Again";
        boxes[pattern[0]].style.color = "rgba(172, 255, 47, 0.6)";
        boxes[pattern[1]].style.color = "rgba(172, 255, 47, 0.6)";
        boxes[pattern[2]].style.color = "rgba(172, 255, 47, 0.6)";
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.color = "white";
  }
};

resetBtn.addEventListener("click", () => {
  console.log("Reset Button is clicked");
  gameName.innerText = "TIC TAC TOE";
  resetBtn.innerText = "Reset";
  turnO = true;
  enableBoxes();
});

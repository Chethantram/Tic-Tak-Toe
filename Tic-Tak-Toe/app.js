let boxes = document.querySelectorAll(".box");
let Resetbtn = document.querySelector(".Reset");
let newBtn = document.querySelector(".new");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnX = true;
let count = 0;
let win = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }

    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      Draw();
    }
  });
});
const enabledBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const ResetGame = () => {
  turnX = true;
  count = 0;
  enabledBtn();
  msgContainer.classList.add("hide");
};

const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const ShowWinner = (winner) => {
  msg.innerText = `Congrulation,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};
const Draw = () => {
  msg.innerText = "Draw a Game.Play new game";
  msgContainer.classList.remove("hide");
  disabledBtn();
};
const checkWinner = () => {
  for (let pattern of win) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        ShowWinner(pos1Val);
        return true;
      }
    }
  }
};
newBtn.addEventListener("click", ResetGame);
Resetbtn.addEventListener("click", ResetGame);

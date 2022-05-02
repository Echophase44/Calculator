const numberBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operation-btn");
const displayOutput = document.querySelector(".displayOutput");
const displayHistory = document.querySelector(".displayHistory");
const clearBtn = document.querySelector("#clear-btn");
let operator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    updateDisplay(numberBtns[i].innerText);
  });
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", () => {
    updateDisplay(operatorBtn[i].innerText);
    operator = operatorBtn[i].innerText;
    runit();
  });
}

function updateDisplay(input) {
  displayOutput.innerText += input;
}

clearBtn.addEventListener("click", () => {
  displayOutput.innerText = "";
  displayHistory.innerText = "";
});

function runit() {
  switch (operator) {
    case "+":
      console.log("it's working!");
      break;
  }
}

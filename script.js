const numberBtns = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operation-btn");
const displayOutput = document.querySelector(".displayOutput");
const displayHistory = document.querySelector(".displayHistory");
const operatorSign = document.querySelector(".operatorSign");
const clearBtn = document.querySelector("#clear-btn");

let operator = "";
valueOne = "";
valueTwo = "";
calculate = false;

function add(a, b) {
  displayOutput.innerText = a + b;
  clearHistory();
}

function subtract(a, b) {
  displayOutput.innerText = a - b;
  clearHistory();
}

function multiply(a, b) {
  displayOutput.innerText = a * b;
  clearHistory();
}

function divide(a, b) {
  displayOutput.innerText = a / b;
  clearHistory();
}

clearBtn.addEventListener("click", () => {
  clearAll();
});

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    checkLength();
    updateDisplay(numberBtns[i].innerText);
  });
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", () => {
    runit();
    operator = operatorBtn[i].innerText;
    updateSign(operatorBtn[i].innerText);
    checkHistory();
    if (operatorSign.innerText === "=") {
      operatorSign.innerText = "";
      movetoOutput();
    }
  });
}

function updateDisplay(input) {
  displayOutput.innerText += input;
}

function updateSign(input) {
  operatorSign.innerText = input;
}

function moveToHistory() {
  displayHistory.innerText = displayOutput.innerText;
  displayOutput.innerText = "";
}

function movetoOutput() {
  displayOutput.innerText = displayHistory.innerText;
  displayHistory.innerText = "";
}

function clearHistory() {
  displayHistory.innerText = "";
}

function clearAll() {
  displayOutput.innerText = "";
  displayHistory.innerText = "";
  operatorSign.innerText = "";
}

function dividebyZero() {
  if (displayHistory.innerText === "0" && operator === "/") {
    alert("Cannot divide by zero.");
    clearAll();
  }
}

function checkLength() {
  if (displayOutput.innerText.length > 20) {
    alert("Max character length reached.");
  }
}

function checkHistory() {
  if (displayHistory.innerText === "") {
    moveToHistory();
  } else if (
    displayHistory.innerText >= 0 &&
    operator !== "" &&
    displayOutput.innerText === ""
  ) {
    return;
  } else if (displayHistory.innerText >= 0) {
    valueOne = parseFloat(displayHistory.innerText);
    valueTwo = parseFloat(displayOutput.innerText);
    calculate = true;
  }
}

function runit() {
  switch (operator) {
    case "+":
      checkHistory();
      if (calculate === true) {
        add(valueOne, valueTwo);
        calculate = false;
      }
      break;

    case "/":
      dividebyZero();
      checkHistory();
      if (calculate === true) {
        divide(valueOne, valueTwo);
        calculate = false;
      }
      break;

    case "-":
      checkHistory();
      if (calculate === true) {
        subtract(valueOne, valueTwo);
        calculate = false;
      }
      break;

    case "*":
      checkHistory();
      if (calculate === true) {
        multiply(valueOne, valueTwo);
        calculate = false;
      }
      break;

    case "=":
      dividebyZero();
      checkHistory();
      operatorSign.innerText = "";

    default:
      return;
  }
}

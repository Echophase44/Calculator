//////////////////// Numbers ///////////////////
const numberBtns = document.querySelectorAll(".number");
const displayOutput = document.querySelector(".displayOutput");
const displayHistory = document.querySelector(".displayHistory");
////////////////////// Operators ////////////////////

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
    console.log(numberBtns[i].innerText);
    updateDisplay(numberBtns[i].innerText);
  });
}

function updateDisplay(input) {
  displayOutput.innerText += input;
}

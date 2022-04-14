//////////////////// Numbers ///////////////////
const one = document.querySelector("#one-btn");
const two = document.querySelector("#two-btn");
const three = document.querySelector("#three-btn");
const four = document.querySelector("#four-btn");
const five = document.querySelector("#five-btn");
const six = document.querySelector("#six-btn");
const seven = document.querySelector("#seven-btn");
const eight = document.querySelector("#eight-btn");
const nine = document.querySelector("#nine-btn");
const zero = document.querySelector("#zero-btn");
const dot = document.querySelector("#dot-btn");

////////////////////// Operators ////////////////////
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const divideBtn = document.querySelector("#divide-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const addBtn = document.querySelector("#add-btn");

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

console.log(add(4, 6));

function sendtoConsole(input) {
  console.log(7);
}

seven.addEventListener("click", sendtoConsole);

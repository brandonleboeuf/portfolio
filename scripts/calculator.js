let runningTotal = 0;
let buffer = "0";
let display = "0";
let previousOperator = null;
let opSym = "";

const mathSymbol = document.querySelector(".math-symbol");
const screen = document.querySelector(".number");

function buttonClick(value) {
  if (isNaN(value)) {
    // this is not a numner
    handleSymbol(value);
  } else {
    // this is a number
    handleNumber(value);
    screen.innerText = buffer;
  }

  mathSymbol.innerText = opSym;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      opSym = "";
      runningTotal = 0;
      screen.innerText = runningTotal;
      break;
    case "=":
      if (previousOperator === null) {
        // you need two numbers to do math
        return;
      }
      flushOpperation(parseInt(buffer));
      previousOperator = null;
      opSym = "";
      screen.innerText = runningTotal;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      opSym = "";
      if (buffer.length === 1) {
        buffer = "0";
        screen.innerText = buffer;
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
        screen.innerText = buffer;
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      opSym = symbol;
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer); // could be written +buffer

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOpperation(intBuffer);
  }

  previousOperator = symbol;
  opSym = symbol;
  buffer = "0";
}

function flushOpperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons ")
    .addEventListener("click", function (e) {
      buttonClick(e.target.innerText);
    });
}
init();

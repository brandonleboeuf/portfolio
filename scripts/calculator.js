let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    // this is not a numner
    handleSymbol(value);
  } else {
    // this is a number
    handleNumber(value);
  }

  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        // you need two numbers to do math
        return;
      }
      flushOpperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
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

  buffer = runningTotal + symbol;
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
  // screen.innerText = `${buffer} ${symbol}`;
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".calc-buttons ")
    .addEventListener("click", function (e) {
      buttonClick(e.target.innerText);
    });
}
init();

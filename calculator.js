function createCalculator(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("Container mit der angegebenen ID nicht gefunden");
    return;
  }
  container.innerHTML = `
        <div id="calculator">
            <input type="text" id="display" placeholder="-" disabled>
            <button onclick="appendNumber('1', event)" class="calculator-button">1</button>
            <button onclick="appendNumber('2', event)" class="calculator-button">2</button>
            <button onclick="appendNumber('3', event)" class="calculator-button">3</button>
            <button onclick="setOperation('add', event)" class="calculator-button">+</button>
            <button onclick="appendNumber('4', event)" class="calculator-button">4</button>
            <button onclick="appendNumber('5', event)" class="calculator-button">5</button>
            <button onclick="appendNumber('6', event)" class="calculator-button">6</button>
            <button onclick="setOperation('subtract', event)" class="calculator-button">-</button>
            <button onclick="appendNumber('7', event)" class="calculator-button">7</button>
            <button onclick="appendNumber('8', event)" class="calculator-button">8</button>
            <button onclick="appendNumber('9', event)" class="calculator-button">9</button>
            <button onclick="setOperation('multiply', event)" class="calculator-button">*</button>
            <button onclick="appendNumber('0', event)" class="calculator-button">0</button>
            <button onclick="appendDecimal(event)" class="calculator-button">.</button>
            <button onclick="toggleSign(event)" class="calculator-button">+/-</button>
            <button onclick="setOperation('log2', event)" class="calculator-button">log2</button>
            <button onclick="setOperation('divide', event)" class="calculator-button">/</button>
            <button id="clear" onclick="clearDisplay(event)" class="calculator-button">C</button>
            <button id="equals" onclick="calculate(event)" class="calculator-button" style="grid-column: span 2;">=</button>
        </div>
    `;
}

let currentInput = "";

let operation = "";
let firstNumber = null;
let result = null;

function appendNumber(number, event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function appendDecimal(event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  if (!currentInput.includes(".")) {
    currentInput += ".";
    document.getElementById("display").value = currentInput;
  }
}

function toggleSign(event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  if (currentInput !== "") {
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.substring(1);
    } else {
      currentInput = "-" + currentInput;
    }
    document.getElementById("display").value = currentInput;
  }
}

function setOperation(op, event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  if (result !== null && currentInput === "") {
    firstNumber = result;
  } else if (currentInput !== "") {
    firstNumber = parseFloat(currentInput);
  }

  if (op === "log2") {
    operation = op;
    calculate();
  } else {
    currentInput = "";
    operation = op;
    document.getElementById("display").value = "";
  }
}

function calculate(event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  let secondNumber = parseFloat(currentInput);

  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
    case "log2":
      if (firstNumber > 0) {
        result = Math.log2(firstNumber);
      } else {
        result = "Ungültige Eingabe für Logarithmus";
      }
      break;
    default:
      result = "Ungültige Operation";
  }

  document.getElementById("display").value = result;
  currentInput = "";
  firstNumber = result;
  operation = "";
}

function clearDisplay(event) {
  if (event) event.preventDefault(); // Verhindert das erneute Laden der Seite
  currentInput = "";
  firstNumber = null;
  operation = "";
  result = null;
  document.getElementById("display").value = "";
}

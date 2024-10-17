function createCalculator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container mit der angegebenen ID nicht gefunden');
        return;
    }
    container.innerHTML = `
        <div id="calculator">
            <input type="text" id="display" placeholder="0" disabled>
            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button onclick="setOperation('add')">+</button>
            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button onclick="setOperation('subtract')">-</button>
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button onclick="setOperation('multiply')">*</button>
            <button onclick="appendNumber('0')">0</button>
            <button onclick="setOperation('log2')">log2</button>
            <button onclick="setOperation('divide')">/</button>
            <button id="clear" onclick="clearDisplay()">C</button>
            <button id="equals" onclick="calculate()" style="grid-column: span 2;">=</button>
        </div>
    `;
}

let currentInput = "";
let operation = "";
let firstNumber = null;
let result = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = currentInput;
}

function setOperation(op) {
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

function calculate() {
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

function clearDisplay() {
    currentInput = "";
    firstNumber = null;
    operation = "";
    result = null;
    document.getElementById("display").value = "";
}

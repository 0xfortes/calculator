const numbers = document.querySelectorAll(".button-numbers");
const operators = document.querySelectorAll(".button-operator");
const clearDisplay = document.getElementById("clear");
const eraseDisplay = document.getElementById("erase");
const decimal = document.getElementById("dot");
const equal = document.getElementById("equal");
const topDisplay = document.getElementById("lastCalc")
const botDisplay = document.getElementById("currentCalc")

let result = "";
let operator = "";
let opOne = "";
let opTwo = "";

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
    if(b == 0) { return "Really? -__-"}
    return a / b;
}

function calculate(operator, a, b) {
    if (operator == "+") {
        result = add(a, b);
    }
    else if (operator == "-") {
        result = subtract(a, b);
    }
    else if (operator == "x") {
        result = multiply(a, b);
    }
    else if (operator == "/") {
        result = divide(a, b);
    }
    else if (operator == "%") {
        result = Math.round((a/b) * 100);
    }
    topDisplay.innerHTML = opOne + " " + operator + " " + opTwo + " =";
    botDisplay.innerHTML = Math.round(result * 1000)/1000;   
}

numbers.forEach(numbers => {
    numbers.addEventListener("click", (e) => {
        if(isNaN(botDisplay.textContent) == true)  {
            botDisplay.innerHTML = e.target.textContent;
        }
        else if (isNaN(botDisplay.textContent) == false) {
            botDisplay.innerHTML = botDisplay.textContent + e.target.textContent;
        }
        if (operator == "") {
            opOne = Number(botDisplay.textContent);
        }
        opTwo = Number(botDisplay.textContent);
    });
})

operators.forEach(operators => {
    operators.addEventListener("click", (e) => {
        checkResult();
        topDisplay.innerHTML = opOne + " " + e.target.textContent;
        botDisplay.innerHTML = e.target.textContent;
        operator = e.target.textContent;
    })
})

function checkResult() {
    if (botDisplay.textContent == result) {
        opOne = result;
    }
}

function clearD() {
    botDisplay.innerHTML = "";
    topDisplay.innerHTML = "";
    opOne = "";
    operator = "";
    opTwo = "";
}

function eraseChar() {
    botDisplay.innerHTML = botDisplay.innerHTML.slice(0, (botDisplay.innerHTML.length - 1));
}

function decimalChar() {
    if (botDisplay.textContent === "" || botDisplay.textContent === operator) {
        botDisplay.innerHTML = "0.";
    }
    if (botDisplay.textContent.includes(".") === false) {
        botDisplay.innerHTML = botDisplay.innerHTML + ".";
    }
}

equal.addEventListener("click", () => calculate(operator, opOne, opTwo));
clearDisplay.addEventListener("click", clearD);
eraseDisplay.addEventListener("click", eraseChar);
decimal.addEventListener("click", decimalChar);
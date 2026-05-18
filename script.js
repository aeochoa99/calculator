const inputKeys = document.querySelectorAll(".key");
const decimalKey = document.querySelector("#decimal");
const operatorKeys = document.querySelectorAll("#operator");

const expression = {
    constant1: "",
    operator: "",
    constant2: "",
    lastUpdated: "",
    result: ""
}

const inputOutputContainer = document.querySelector(".input-output-container");

function checkIfOperator(key) {
    if (key === "/" ||
        key === "*" ||
        key === "+" ||
        key === "-"
    ) {
        return true;
    }
}

function deleteFromLastUpdated() {
    if (expression.lastUpdated === "constant1") {
        expression.constant1 = expression.constant1.slice(0,-1);
    } else {
        expression.constant2 = expression.constant2.slice(0,-1);
    }
}

function checkIfNumber(key) {
    if (!isNaN(parseInt(key))) {
        return true;
    } else {
        return false;
    }
}

function isOperatorMissing() {
    if (expression.operator === "") {
        return true;
    } else {
        return false;
    }
}

function updateOperator(key) {
    expression.operator += key;
}

function updateConstant1(key) {
    expression.constant1 += key;
    expression.lastUpdated = "constant1";
}

function updateConstant2(key) {
    expression.constant2 += key;
    expression.lastUpdated = "constant2";
}

function isDeleteKey(key) {
    if (key === "DELETE") {
        return true;
    } else {
        return false;
    }
}

function isDecimalKey(key) {
    if (key === ".") {
        return true;
    } else {
        return false;
    }
}

function isEqualsKey(key) {
    if (key === "=") {
        return true;
    } else {
        return false;
    }
}

function getLastUpdated() {
    if (expression.lastUpdated === "constant1") {
        return "constant1";
    } else {
        return "constant2";
    }
}

function disableDecimalKey() {
    decimalKey.disabled = true;
}

function enableDecimalKey() {
    decimalKey.disabled = false;
}

function disableOperatorKeys() {
    operatorKeys.forEach(key => {
        key.disabled = true;
    })
}

function enableOperatorKeys() {
    operatorKeys.forEach(key => {
        key.disabled = false;
    })
}

function compute(constant1, operator, constant2) {
    let num1 = +constant1;
    let num2 = +constant2;
    let result = 0;

    if (operator === "+") {
        result = num1 + num2;
        expression.result = String(result);
        return expression.result;
    } else if (operator === "-") {
        result = num1 - num2;
        expression.result = String(result);
        return expression.result;
    } else if (operator === "*") {
        result = num1 * num2;
        expression.result = String(result);
        return expression.result;
    } else if (operator === "/") {
        result = num1 / num2;
        expression.result = String(result);
        return expression.result;
    }
}
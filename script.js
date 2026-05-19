const inputKeys = document.querySelectorAll(".key");
inputKeys.forEach(key => {
    key.addEventListener("click", () => {
        const keyInfo = key.textContent;
        if (isClearKey(keyInfo)) {
            clearExpression();
            enableOperatorKeys();
        } else if (hasResult()) {
            if (checkIfOperator(keyInfo)) {
                setConstant1();
                updateOperator(keyInfo);
                enableDecimalKey();
                disableOperatorKeys();
                expression.result = "";
                expression.constant2 = "";
            } else if (isDeleteKey(keyInfo)){
                expression.lastUpdated = "constant1";
                deleteFromLastUpdated();
                expression.result = "";
                expression.constant2 = "";
                expression.operator = "";
            } else {
                clearExpression();
                updateConstant1(keyInfo);
            }
        } else if (checkIfNumber(keyInfo)) {
            if (isOperatorMissing()) {
                updateConstant1(keyInfo);
                disableEqualsKey();
            } else {
                updateConstant2(keyInfo);
                enableEqualsKey();
            }
        } else if (checkIfOperator(keyInfo)) {
            updateOperator(keyInfo);
            enableDecimalKey();
            disableOperatorKeys();
        } else if (isDeleteKey(keyInfo)) {
            deleteFromLastUpdated();
        } else if (isDecimalKey(keyInfo)) {
            if (isOperatorMissing()) {
                updateConstant1(keyInfo);
                disableDecimalKey();
            } else {
                updateConstant2(keyInfo);
                disableDecimalKey();
            }
        } else if (isEqualsKey(keyInfo)) {
            compute(expression.constant1, expression.operator, expression.constant2);
            enableDecimalKey();
            enableOperatorKeys();
        }
    })
})


const decimalKey = document.querySelector("#decimal");
const operatorKeys = document.querySelectorAll("#operator");
const equalKey = document.querySelector("#equal");

const expression = {
    constant1: "",
    operator: "",
    constant2: "",
    lastUpdated: "",
    result: ""
}

let inputOutputContainer = document.querySelector(".input-output-container");

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
        inputOutputContainer.textContent = inputOutputContainer.textContent.slice(0,-1);
    } else {
        expression.constant2 = expression.constant2.slice(0,-1);
        inputOutputContainer.textContent = inputOutputContainer.textContent.slice(0,-1);
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

function hasResult() {
    if (expression.result != "") {
        return true;
    } else {
        return false;
    }
}

function updateOperator(key) {
    expression.operator = key;
    inputOutputContainer.textContent += expression.operator;
}

function updateConstant1(key) {
    expression.constant1 += key;
    expression.lastUpdated = "constant1";
    inputOutputContainer.textContent = expression.constant1;
}

function setConstant1() {
    expression.constant1 = expression.result;
}

function updateConstant2(key) {
    expression.constant2 += key;
    expression.lastUpdated = "constant2";
    inputOutputContainer.textContent = expression.constant2;
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

function isClearKey(key) {
    if (key === "CLEAR") {
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

function clearExpression() {
    expression.constant1 = "";
    expression.constant2 = "";
    expression.operator = "";
    expression.lastUpdated = "";
    expression.result = "";
    inputOutputContainer.textContent = "";
}

function disableEqualsKey() {
    equalKey.disabled = true;
}

function enableEqualsKey() {
    equalKey.disabled = false;
}

function compute(constant1, operator, constant2) {
    let num1 = +constant1;
    let num2 = +constant2;
    let result = 0;

    if (operator === "+") {
        result = num1 + num2;
        expression.result = String(result);
        inputOutputContainer.textContent = expression.result;
        expression.constant1 = expression.result;
    } else if (operator === "-") {
        result = num1 - num2;
        expression.result = String(result);
        inputOutputContainer.textContent = expression.result;
        expression.constant1 = expression.result;
    } else if (operator === "*") {
        result = num1 * num2;
        expression.result = String(result);
        inputOutputContainer.textContent = expression.result;
        expression.constant1 = expression.result;
    } else if (operator === "/") {
        result = num1 / num2;
        expression.result = String(result);
        inputOutputContainer.textContent = expression.result;
        expression.constant1 = expression.result;
    }

    disableEqualsKey();
}
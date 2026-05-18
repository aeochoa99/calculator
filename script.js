const inputKeys = document.querySelectorAll(".key");

const expression = {
    constant1: "",
    operator: "",
    constant2: "",
    lastUpdated: "",
    result: 0
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

function updateConstant1(key) {
    expression.constant1 += key;
    expression.lastUpdated = "constant1";
}

function updateConstant2(key) {
    expression.constant2 += key;
    expression.lastUpdated = "constant2";
}
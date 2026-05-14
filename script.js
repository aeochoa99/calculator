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
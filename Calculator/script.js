const textarea = document.querySelector("textarea");
const buttons = document.querySelectorAll(".digit");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        textarea.textContent += btn.textContent;
    });
});

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    textarea.textContent = "";
});

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        textarea.textContent += " " + op.textContent + " ";
    });
});

const evaluate = document.querySelector(".evaluate");
evaluate.addEventListener("click", () => {
    operate();
});

function operate() {
    expr = textarea.textContent;
    let first_val = +expr.substring(0, expr.indexOf(" "));
    expr = expr.substring(expr.indexOf(" ") + 1);

    let op = expr.substring(0, expr.indexOf(" "));
    expr = expr.substring(expr.indexOf(" ") + 1);

    let second_val;
    if (expr.indexOf(" ") === -1) {
        second_val = +expr;
        expr = "";
    }
    else {
        second_val = expr.substring(0, expr.indexOf(" "));
        expr = expr.substring(expr.indexOf(" ") + 1);
    }
    let result
    switch (op){
        case "+":
            result = +first_val + +second_val;
            break;
        case "-":
            result = +first_val - +second_val;
            break;
        case "*":
            result = +first_val * +second_val;
            break;
        case "/":
            result = +first_val / +second_val;
            break;
    }
    textarea.textContent = (expr === "") ? result : result + " " + expr;
};
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+", "="];
let ans = "";

const calculate = (val) => {
    display.focus();
    if (val === "=" && ans !== "") {
        ans = eval(ans.replace("%", "/100"));
    }
    else if (val === "AC") {
        ans = "";
    }
    else if (val === "DEL") {
        ans = ans.toString().slice(0, -1);
    }
    else {
        if (ans === "" && operators.includes(val)) {
            return;
        }
        ans += val;
    }
    display.value = ans;
};
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
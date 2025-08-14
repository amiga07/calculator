function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
function operate(operator, num1, num2){
    switch (operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}
const display = document.querySelector('.display');
const buttons = Array.from(document.querySelectorAll('button'));
/*buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.textContent = button.textContent;
    })
});*/
const num1 = null;
const num2 = null;
const operator = '';

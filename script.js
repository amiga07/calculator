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
            return add(Number(num1), Number(num2));
        case '-':
            return subtract(Number(num1), Number(num2));
        case '*':
            return multiply(Number(num1), Number(num2));
        case '/':
            return divide(Number(num1), Number(num2));
    }
}
function countCharacter(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === char) {
        count++;
      }
    }
    return count;
  }
const display = document.querySelector('.display');
const digits = Array.from(document.querySelectorAll('.digit'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clear = document.querySelector('.clean');
const remove = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const buttons = Array.from(document.querySelectorAll('button'));
const decimal = document.querySelector('.decimal');
display.textContent = '0';
let num1 = '';
let num2 = '';
let operator = '';
let operation = 0;
let res = '';
let decCount = 0;
digits.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === ''){
            if (num1 === '0' || display.textContent === ''){
                num1 = button.textContent;
            } 
            else{
                num1 += button.textContent;
            }
            display.textContent = num1;
        } else{
            if (num2 === '0'){
                num2 = button.textContent;
            }
            else{
                num2 += button.textContent;
                res = operate(operator, num1, num2);
            }
            display.textContent += num2;
        }
    })
})
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 === '') return;
        else{
            operator = button.textContent;
            display.textContent += operator;
            operation += 1;
        }
        if (operation >= 2){
            display.textContent = res + operator;
            num1 = res;
            num2 = '';
        };
        console.log(operation);
    
    })
})
equal.addEventListener('click', () => {
    if (operator !== '' && num1 !== '' && num2 != ''){
        display.textContent = operate(operator, num1, num2);
        num1 = display.textContent;
        num2 = '';
        operator = '';
        operation = 0;
    }
})
clear.addEventListener('click', () => {
    num1 = '0';
    num2 = '';
    operator = '';
    display.textContent = num1;
    operation = 0;
})
remove.addEventListener('click', () => {
    if (num1 !== '' && operator !== '' && num2 !== ''){
        num2 = '';
        display.textContent += operator;
    } 
    else if (num1 !== 0 && operator !== '' && num2 === ''){
        operator = '';
        display.textContent = num1;
        operation -= 1;
    }
    else if (operator === '' && num2 === '' && num1 !== ''){
        num1 = '';
        display.textContent = '0';
    }
})
decimal.addEventListener('click', () => {
    num1 += '.';
    display.textContent = num1;
});

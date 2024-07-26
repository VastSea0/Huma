
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const resultDisplay = document.querySelector('.result');
    let currentInput = '';
    let operator = null;
    let firstOperand = null;

    function updateDisplay(value) {
        resultDisplay.textContent = value;
    }

    function clear() {
        currentInput = '';
        operator = null;
        firstOperand = null;
        updateDisplay('0');
    }

    function appendNumber(number) {
        if (currentInput === '0') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay(currentInput);
    }

    function setOperator(op) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (operator) {
            const result = calculate();
            firstOperand = result;
            updateDisplay(result);
        }
        operator = op;
        currentInput = '';
    }

    function calculate() {
        let result;
        const secondOperand = parseFloat(currentInput);
        if (isNaN(firstOperand) || isNaN(secondOperand)) return;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case 'X':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        return result;
    }

    function handleEqual() {
        const result = calculate();
        if (result !== undefined) {
            updateDisplay(result);
            firstOperand = result;
            currentInput = '';
            operator = null;
        }
    }

    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (!isNaN(value)) {
                appendNumber(value);
            } else {
                switch (value) {
                    case 'AC':
                        clear();
                        break;
                    case '+':
                    case '-':
                    case 'X':
                    case '/':
                        setOperator(value);
                        break;
                    case '=':
                        handleEqual();
                        break;
                    default:
                        break;
                }
            }
        });
    });

    clear();
});

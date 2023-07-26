const elementsButton = document.querySelectorAll('button');
const calculatorResult = document.querySelector('.calculator_result');
const operationKeys = ['+', '-', '/', '%', 'x', '*']
const numbersKeys = ['1','2','3','4','5','6','7','8','9','0']
let showValueOnScreen = '';
let numberResult = '';
let isPressedKeyEqual = false
let isPressedOperationKey = false

function addResultCalc() {
  isPressedKeyEqual = true
  let result = eval(numberResult)
  calculatorResult.innerHTML = result;
  numberResult = result;
}

function cleanNumbers() {
  isPressedKeyEqual = false
  numberResult = '';
  showValueOnScreen = ''
  calculatorResult.innerHTML = '0';
}

function resetNumbersSignal() {
  showValueOnScreen = ''
}

function invertSignal() {
    numberResult = eval(numberResult) * -1
    calculatorResult.innerHTML = numberResult
}

function percentage() {
  numberResult = eval(numberResult) / 100
  calculatorResult.innerHTML = numberResult
}

function insertResult(key) {

  if(operationKeys.includes(key)) {
    isPressedOperationKey = true
    isPressedKeyEqual = false 
  }

  if(numbersKeys.includes(key) && isPressedOperationKey) {
    resetNumbersSignal()
    isPressedOperationKey = false
  }

  if (key === 'AC') {
    cleanNumbers();
    return;
  }

  if (key === '=') {
    addResultCalc();
    return;
  }

  if (key === 'x') {
    key = '*';
  }

  if (key === '+/-') {
    invertSignal();
    return;
  }

  if (key === '%') {
    percentage();
    return;
  }

  if(isPressedKeyEqual) {
    cleanNumbers();
  }

  if (!operationKeys.includes(key)) {
    showValueOnScreen += key;
  }

  numberResult = numberResult + String(key);
  calculatorResult.innerHTML = showValueOnScreen;
}

elementsButton.forEach((elementButton) => {
  elementButton.addEventListener('click', () => {
    insertResult(elementButton.innerHTML);
  });
});

// 50 + (-51) = -1
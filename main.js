const elementsButton = document.querySelectorAll('button');
const calculatorResult = document.querySelector('.calculator_result');
let numberResult = '';

function addResultCalc() {
  calculatorResult.innerHTML = eval(numberResult);
  numberResult = '';
}

function cleanNumbers() {
  numberResult = '';
  calculatorResult.innerHTML = '0';
}

function insertResult(key) {
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

  numberResult = numberResult + String(key);
  calculatorResult.innerHTML = numberResult;
}

elementsButton.forEach((elementButton) => {
  elementButton.addEventListener('click', () => {
    insertResult(elementButton.innerHTML);
  });
});

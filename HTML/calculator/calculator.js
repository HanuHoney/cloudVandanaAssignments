let currentInput = '';
let result = 0;

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
  result = 0;
}

function calculateResult() {
  try {
    result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

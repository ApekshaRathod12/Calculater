let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);//evaluate the mathematical expression stored in the variable currentInput
        console.log(result.toString());
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        console.log(error);
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

document.addEventListener('keydown', function(event) {

    const key = event.key;
    const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/','0', '=', 'Enter', 'Escape'];
    if (validInputs.includes(key)) {
        if (key === 'Enter' || key === '=') {
            calculate(); 
        } else if (key === 'Escape') {
            clearDisplay(); 
        } else {
            appendToDisplay(key);
        }
    }
});

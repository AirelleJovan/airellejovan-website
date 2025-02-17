let memory = 0;
let currentInput = '';
let isSequence = false;

// Function to add input to display
function addToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Function to clear display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

// Function to calculate result
function calculateResult() {
    try {
        // Handle special cases for operations like x² and x^n
        if (currentInput.includes('^2')) {
            currentInput = currentInput.replace('^2', '**2');
        } else if (currentInput.includes('^n')) {
            let base = currentInput.split('^n')[0];
            currentInput = base + '**' + document.getElementById('term').value;
        } else if (currentInput.includes('√')) {
            currentInput = currentInput.replace('√', 'Math.sqrt');
        }
        
        // Evaluate the mathematical expression
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Memory functions
function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentInput = memory.toString();
    document.getElementById('display').value = currentInput;
}

function memoryAdd() {
    memory += parseFloat(currentInput);
    currentInput = '';
}

function memorySubtract() {
    memory -= parseFloat(currentInput);
    currentInput = '';
}

// Sequence functions
function calculateSequence() {
    const a = parseFloat(document.getElementById('firstTerm').value);
    const b = parseFloat(document.getElementById('difference').value);
    const n = parseInt(document.getElementById('term').value);

    // Formula for the nth term: a + (n - 1) * b
    const nthTerm = a + (n - 1) * b;
    const sumOfTerms = (n / 2) * (2 * a + (n - 1) * b);

    // Display the results
    document.getElementById('nthTerm').innerText = `Suku ke-${n}: ${nthTerm}`;
    document.getElementById('sumOfTerms').innerText = `Jumlah ${n} suku pertama: ${sumOfTerms}`;
}

// Keyboard input support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('display').value = currentInput;
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key.match(/[0-9+\-*/.()^n]/)) {
        addToDisplay(event.key);
    }
});

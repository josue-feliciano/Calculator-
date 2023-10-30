
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Enter Correct numbers.";
        return;
    }

    const sum = num1 + num2;

    resultDiv.textContent = `The sum is: ${sum}`;
}

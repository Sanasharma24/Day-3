// Simple JavaScript calculator without HTML

// Function to perform calculation
function calculate(expression) {
    let currentNum = 0;
    let operator = '+';
    let result = 0;
    let numbers = [];
    let operators = [];

    // Parse the expression and separate numbers and operators
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        // If the character is a number or a decimal point, build the current number
        if ((char >= '0' && char <= '9') || char === '.') {
            currentNum = currentNum * 10 + (char === '.' ? '.' : parseInt(char));
        }

        // If the character is an operator or it's the last character, process the current number
        if ((char === '+' || char === '-' || char === '*' || char === '/') || i === expression.length - 1) {
            if (operator === '+') {
                numbers.push(currentNum);
            } else if (operator === '-') {
                numbers.push(-currentNum);
            } else if (operator === '*') {
                numbers[numbers.length - 1] *= currentNum;
            } else if (operator === '/') {
                if (currentNum === 0) {
                    console.log('Error: Division by zero');
                    return 'Error: Division by zero';
                }
                numbers[numbers.length - 1] /= currentNum;
            }

            // Reset currentNum for the next number
            currentNum = 0;
            operator = char;  // Update the operator
        }
    }

    // Add the last number
    numbers.push(currentNum);

    // Calculate the final result by adding up all the numbers
    result = numbers.reduce((sum, num) => sum + num, 0);
    return result;
}

// Example usage:
let expression1 = "3+5*2";
let expression2 = "10/2-4";
let expression3 = "12*3+4/2";

console.log(calculate(expression1));  // Output: 13
console.log(calculate(expression2));  // Output: 1
console.log(calculate(expression3));  // Output: 38

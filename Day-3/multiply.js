function processNumbers() {
    for (let num = 1; num <= 100; num++) {
        let result = num;

        if (result % 2 === 0) {
            result *= 5; 
        }

        if (result % 3 === 0) {
            result /= 3; 
        }

        console.log(`Number: ${num}, Result after operation: ${result}`);
    }
}

processNumbers();

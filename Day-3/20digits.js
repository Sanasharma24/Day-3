function generateNumbers() {
    let numbers = [];

    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 2);
    }

    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 5);
    }

    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 7);
    }

    for (let i = 1; i <= 5; i++) {
        numbers.push(i * 10);
    }

    return numbers;
}

let result = generateNumbers();
console.log("Generated Numbers:", result);

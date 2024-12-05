function printOddAlphabets() {
    let result = [];

    for (let i = 0; i <= 50; i++) {
        if (i % 2 !== 0 && i >= 1 && i <= 26) {
            let alphabet = String.fromCharCode(64 + i);
            result.push(alphabet);
        }
    }

    console.log("Odd-numbered alphabets:", result.join(", "));
}

printOddAlphabets();

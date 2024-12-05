function reverseAlphabets() {
    let result = ""; 

    for (let i = 90; i >= 65; i--) {
        result += String.fromCharCode(i); 
    }

    console.log(result); 
    
}

reverseAlphabets();

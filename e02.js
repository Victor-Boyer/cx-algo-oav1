function isAPangrams(str) {

    let arrayString = str.toUpperCase().split("");
    //console.log(arrayString);

    for (let i=65; i<91; i++) {
        //In String.fromCharCode, the alphabet start at the 65th iteration
        let alphabet = String.fromCharCode(i);
        
        if (arrayString.includes(alphabet)) {
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(isAPangrams("The quick brown fox jumps over the lazy dog"));
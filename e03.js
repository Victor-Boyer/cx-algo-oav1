function marsos(str) {
    let alteredLetter = 0;

    for(let i=0; i < str.length; i++) {

        if(str.charAt(i) === "S" || str.charAt(i) === "O") continue

        else alteredLetter++
    }

    return alteredLetter
}

console.log(marsos("SOFSOSSISSOW"));
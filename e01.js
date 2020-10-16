function howManyCamelCase(str) {
    
    let cpt = 0;

    for(let i in str) {
        if(str.charAt(i) === str.charAt(i).toUpperCase()){
 
            cpt++
 
        }
    }
    return cpt
}

console.log(HowManyCamelCase("CommentTuVas"))
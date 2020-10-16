//4.1 Count

function count(array, element) {

    let count = 0;

    for(let i=0; i < array.length; i++) {
        if(element == array[i]) count++
        else continue
    }

    return count
}

//4.2 Average

function average(array) {

    var total = 0;

    for(let i = 0; i < array.length; i++) {
        total += parseInt(array[i]);
    }

    return avg = total / array.length;
}

//4.3 Min

function minElement(array) {

    let min = array[0]

    for(let i = 0; i < array.length; i++) {
        if(min >= parseInt(array[i])) {
            min = array[i]
        }
        else continue
    }
    return min;
}

//4.4 et 4.5 Max

function maxElement(array) {

    let max = array[0]

    for(let i = 0; i < array.length; i++) {
        if(max <= parseInt(array[i])) {
            max = array[i]
        }
        else continue
    }
    return max;
}

//4.6 Shift

function shiftArray(array) {
    let carbage = array.shift();
    return array;
}

//4.7 Diff

function diffArray(array) {
    return maxElement(array) - minElement(array);
}

//END
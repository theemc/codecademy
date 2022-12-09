//Takes a number, and creates two arrays from the number.
//The arrays are then sorted numerically, one least to greatest, the other greatest to least.
//The arrays are then converted back to numbers and are subtracted.
//Repeat the process 7 times, replacing the old values with the new values.
//Returns the result of Kaprekar's routine into console. 

const kaprekar = (number) => {
    let numA = [];
    let numB = [];
    numA = Array.from(number.toString(), Number);
    numA = numA.sort((a,b) => a - b);
    numA = Number(numA.join(''));
    numB = Array.from(number.toString(), Number);
    numB = numB.reverse(numB.sort((a,b) => a- b));
    numB = Number(numB.join(''));
    for (i = 0; i < 7; i++) {
        number = numB - numA
        numA = Array.from(number.toString(), Number);
        numA = numA.sort((a,b) => a - b);
        numA = Number(numA.join(''))
        numB = Array.from(number.toString(), Number);
        numB = numB.reverse(numB.sort((a,b) => a- b));
        numB = Number(numB.join(''));
    }
    return console.log(number)
}

kaprekar(1263);
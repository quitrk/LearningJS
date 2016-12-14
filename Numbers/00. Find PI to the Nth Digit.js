/*
    Numbers 00. Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.
                Based on John Machin's formula pi/4 = 4 * arctan (1/5) - arctan (1/239)
*/
var numPi = document.getElementById("numPi");

function piDigits() {
    var digits = parseFloat(numPi.value);
    
    if ( digits > 20 || digits === NaN ) {
        digits = 20;
    }
        var answer = Math.PI.toFixed(digits);

    pi.innerHTML = answer;
};

numPi.addEventListener("input", piDigits);
console.log(Math.PI.toFixed(2)); //display console too

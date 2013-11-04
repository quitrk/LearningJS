/*
    Numbers 02. Prime Factorization - Have the user enter a number and find all Prime Factors (if there are any) and display them.  
*/

var getPrimeFactors = function (n) {
    "use strict";

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    var i,
        sequence = [];

    for (i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && isPrime(i)) {
            sequence.push(i);
        }
    }

    return sequence;
};

this.console.log(getPrimeFactors(30030));
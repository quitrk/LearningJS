/*
    Classic Algorithms 03. Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways to find all of the smaller primes (below 10 million or so).
    Solved it first by using Array.splice but wasn't quite happy with the performance.
    The current solution is from http://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number
*/

var sieve = function (n) {
    "use strict";

    var array = [],
        primes = [],
        i,
        j;

    for (i = 0; i < n; i++) {
        array.push(true);
    }

    for (i = 2; i <= Math.sqrt(n); i++) {
        if (array[i]) {
            for (j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (i = 2; i < n; i++) {
        if (array[i]) {
            primes.push(i);
        }
    }

    return primes;
};

this.console.log(sieve(1000000));
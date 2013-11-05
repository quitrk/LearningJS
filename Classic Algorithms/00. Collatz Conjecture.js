/*
    Classic Algorithms 00. Collatz Conjecture - Start with a number n > 1. Find the number of steps it takes to reach one using the following process: If n is even, divide it by 2. 
    If n is odd, multiply it by 3 and add 1.
*/

var collatz = function (n) {
    "use strict";

    var steps = 0;

    (function recursive(n) {
        if (n <= 1) {
            return;
        }

        n = n % 2 === 0 ? n / 2 : n * 3 + 1;

        steps++;
        recursive(n);
    }(n));

    return steps;
};

this.console.log(collatz(20));
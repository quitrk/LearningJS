/*
    Numbers 01. Fibonacci Sequence - Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number. 
*/

var fibonacci = function (n) {
    "use strict";

    var i,
        sequence = [0, 1];

    for (i = 2; i < n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence;
};

this.console.log(fibonacci(10));
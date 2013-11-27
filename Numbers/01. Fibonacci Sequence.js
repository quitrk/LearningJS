/*
    Numbers 01. Fibonacci Sequence - Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number. 
*/

var fibonacci = (function () {
    "use strict";

    var memo = {};

    function f(n) {
        var value;

        if (memo.hasOwnProperty(n)) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n - 2);
            }

            memo[n] = value;
        }

        return value;
    }

    return f;
}());

this.console.log(fibonacci(10));
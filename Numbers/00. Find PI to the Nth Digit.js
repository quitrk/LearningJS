/*
    Numbers 00. Find PI to the Nth Digit - Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.
                Based on John Machin's formula pi/4 = 4 * arctan (1/5) - arctan (1/239)
*/

var getPI = function (n) {
    "use strict";

    if (n === undefined || n > 20) {
        n = 20;
    }

    return (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(n);
};

this.console.log(getPI(20));
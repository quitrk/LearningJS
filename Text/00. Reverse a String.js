/*
    Strings 00. Reverse a String - Enter a string and the program will reverse it and print it out.
    Solved it first using the classic split - reverse - join process.
*/

String.prototype.reverse = function () {
    "use strict";

    var i,
        r;

    for (i = this.length - 1, r = ''; i >= 0; r += this[i--]) {}
    return r;
};

this.console.log("stringExample".reverse());
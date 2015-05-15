/*
  Checks if the string entered by the user is a palindrome.
  That is that it reads the same forwards as backwards like “racecar”
*/
(function () {
    var palindrome = function palindrome(integer) {
        return integer === parseInt(integer.toString().split('').reverse().join(''));
    };
})();

// palindrome(1223221) => true
// palindrome(1222111) => false
// this case in javascript is very simple!

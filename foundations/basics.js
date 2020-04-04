"use strict";
function add(n1, n2, showResult, resultPhrase) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('incorrect input');
    }
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return resultPhrase + result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);

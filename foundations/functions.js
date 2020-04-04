"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result ' + num);
}
//function without a return statement does not return anything, which means it returns type void. Specifying void means you can ignore
//result that might come
function addAndHandle(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
var combinevalues;
combinevalues = add;
console.log(combinevalues(8, 8));
addAndHandle(10, 20, function (result) { console.log(result); });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === 'as-number') {
        return parseFloat(result);
    }
    else if (resultType === 'as-text') {
        return result.toString();
    }
    else {
        return result;
    }
}
var combinedAges = combine(24, 23, 'as-number');
var combinedNames = combine("Cameron", "Josie", 'as-text');

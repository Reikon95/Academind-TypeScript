"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userInput;
var userName;
userInput = 5;
userInput = "Cam";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error', 500);

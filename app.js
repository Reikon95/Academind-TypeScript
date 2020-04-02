"use strict";
exports.__esModule = true;
var person = {
    name: "Cameron",
    age: 24,
    hobbies: ["hockey", "coding", "spinning", "eating"],
    role: [1, "developer"]
};
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//note you can use the above because typescript KNOWS WITH CERTAINTY that the hobby will be a string
//remember a tuple exists in typescript - this means it is of fixed types and length

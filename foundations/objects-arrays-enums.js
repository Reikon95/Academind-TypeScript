"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "Cameron",
    age: 24,
    hobbies: ["hockey", "coding", "spinning", "eating"],
    job: [1, "developer"],
    role: Role.ADMIN
};
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//note you can use the above because typescript KNOWS WITH CERTAINTY that the hobby will be a string
//remember a tuple exists in typescript - this means it is of fixed types and length
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
})(Role || (Role = {}));

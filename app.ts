export {}
const person = {
    name: "Cameron",
    age: 24,
    hobbies: ["hockey", "coding", "spinning", "eating"],
    role: [1, "developer"]
}

console.log(person.age)

for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

//note you can use the above because typescript KNOWS WITH CERTAINTY that the hobby will be a string

//remember a tuple exists in typescript - this means it is of fixed types and length
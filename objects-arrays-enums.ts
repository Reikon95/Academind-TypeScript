export {}
const person: {
    name: string,
    age: number,
    hobbies: string[],
    job: [number, string]
} = {
    name: "Cameron",
    age: 24,
    hobbies: ["hockey", "coding", "spinning", "eating"],
    job: [1, "developer"],
    role: Role.ADMIN
}

console.log(person.age)

for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

//note you can use the above because typescript KNOWS WITH CERTAINTY that the hobby will be a string

//remember a tuple exists in typescript - this means it is of fixed types and length

enum Role { ADMIN = 0, READ_ONLY = 1, DEVELOPER = 2}
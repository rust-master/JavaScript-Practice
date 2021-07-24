let Person = {
    name: 'Zaryab',
    age: 23,
}

console.log(Person.name);
console.log(Person.age);
console.log(Person);

// Dot Notation
Person.name = 'Ali';
console.log(Person.name);
console.log(Person);

// Bracket Notation
let selection = 'name'
Person[selection] = 'Raza';
console.log(Person.name);
console.log(Person.age);
console.log(Person);
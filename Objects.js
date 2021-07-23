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

Person['name'] = 'Raza';
console.log(Person.name);
console.log(Person.age);
console.log(Person);
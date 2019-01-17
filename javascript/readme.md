## JS History

- 2009 - EcmaScript 5

- 2015 - EcmaScript 6 -> EcmaScript 2015

## `Let` and `Const`

Scope of `var` is full function;

Scope of `let` and `const` is code block;

```javascript 1.8
// can be modified
let name = 'Roman';

// can't be modified
const constant = 10;
```

## Arrow functions

Saves context of `this`;

Haven't `prototype` property;

Unable to create objects from arrow-functions;

```javascript
const square = (x) => x*x;
```

## Default parameters

```javascript
function fetchPosts(pageNumber = 1, itemsPerPage = 10) {
    console.log(`Fetching page number ${pageNumber} with ${itemsPerPage} posts per page`);
}
```

## Rest parameters

- must be the last parameter

- only one rest parameter is allowed

```javascript
function printRestParameter(a, b, ...rest) {
    console.log(rest);
}
// will output: [ 3, 4, 5 ]
printRestParameter(1, 2, 3, 4, 5);
```

## Spread operator

```javascript
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
// will output: 6
console.log(Math.max(...firstArray, ...secondArray));

// Create shallow copy of array
const shallowCopy = [...firstArray, 10, ...secondArray];
// will output [1, 2, 3, 10, 4, 5, 6]
console.log(shallowCopy);
```

## Object destructuring
```javascript
const person = {
    firstName: "John",
    lastName: "Doe"
};
const {firstName, lastName} = person;
// will output: John Doe
console.log(firstName, lastName);
```

```javascript
const person = {
    name: {
        first: "John",
        last: "Doe"
    }
};
const {name: {first, last}} = person;
// will output: John Doe
console.log(first, last);
```

```javascript
const person = {
    name: {
        first: "John",
        last: "Doe"
    }
};
const {name: {first: firstName, last: lastName}} = person;
// will output: John Doe
console.log(firstName, lastName);
```

```javascript
const person = {
    name: {
        last: "Doe"
    }
};
// destructuring with default value
const {name: {first: firstName = "Bill", last: lastName}} = person;
// will output: Bill Doe
console.log(firstName, lastName);
```

```javascript
const person = {
    name: {
        last: "Doe"
    },
    //permissions: {
    //    role: "ADMIN"
    //}
};
// destructuring with default nested value
const {permissions: {role: userRole = "USER"} = {}} = person;
// will output: USER
console.log(userRole);
```

```javascript
const person = {
    // age: 10,
    //permissions: {
    //    role: "ADMIN"
    //}
};
function printUserInfo({permissions: {role: userRole = "USER"} = {}, age: userAge = 20} = {}) {    // will output: USER 20
    console.log(userRole, userAge);
}
printUserInfo();
```

```javascript
const person = {
    age: 10,
    firstName: "John",
    lastName: "Doe"
};

const {age, ...other} = person;
// will output: 10 {firstName: 'John', lastName: 'Doe'}
console.log(age, other);
```

## Array destructuring

```javascript
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

const [, b,, d] = fibonacciNumbers;
// will output: 1 3
console.log(b, d);
```

```javascript
const line = [[1, 2], [3, 4]];

const [[a, b], [c, d]] = line;
// will output: 1 2 3 4
console.log(a, b, c, d);
```

```javascript
const people = ['John', 'Bob'];

const [a, b, c = 'Alice'] = people;
// will output: John Bob Alice
console.log(a, b, c);
```

```javascript
const people = ['John', 'Bob', 'Alice'];

const [a, ...other] = people;
// will output: ['Bob', 'Alice']
console.log(other);
```

```javascript
const animalsDictionary = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};
// filter animals who say 'squeak'
const animalsEntries = Object.entries(animalsDictionary);
const squeakAnimals = animalsEntries
    .filter(([, value]) => value === 'squeak')
    .map(([value]) => value);
// will output: ['mouse', 'hamster']
console.log(squeakAnimals);
```

```javascript
const shape = {
    type: 'segment',
    coordinates: {
        start: [1, 2],
        end: [3, 4]
    }
};
const {coordinates: {start: [a, b], end: [c, d]}} = shape;
// will output: [1 2 3 4]
console.log(a, b, c, d);
```

## Classes

```javascript
const a = 1;
const b = 2;

const point = {a, b};

// will output: {a: 1, b: 2}
console.log(point);
```
/*Storing variables
let: can change, const: can't change
let score = 30;
score = 31;
const cantchange = 10;

console.log(score);
console.log(cantchange)*/

/*Primative data types
String, numbers, boolean, null, undefined, symbol 

const nam = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //also undefined; can change later cause its a let

console.log(typeof isCool);*/

/*Strings
const nam = "John";
const age = 30;
//Concatenation
console.log("My name is " + nam + " and I am " + age); //this way is simpler to type
// Template String
console.log(`My name is ${nam} and I am ${age}`); //this way performs slightly better */
/*
const s = "Hello World,tech,computers,it,code";

console.log(s.split(","));*/

//Arrays - variables that hold multiple values
/*
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', "oranges", "pears", 10, false];

fruits[3] = 5;
fruits[5] = "bamye"
fruits.push("last")
fruits.unshift("first")

console.log(fruits);
console.log(fruits.indexOf('oranges'))
console.log(fruits[1]);*/

//Object Literals
/*const person = {
    firstName: 'John', 
    lastName: 'Doe', 
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50main st',
        city: 'Boston',
        state: 'MA'
    }
}

//console.log(person.firstName, person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.address.city);

//const {firstName, lastName, address: {city}} = person;
//console.log(city);
//person.email = 'abc@email.com'
//console.log(person.email)*/

/*const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    }, 
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];*/

/*for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}*/

/*for(let i of todos) {
    console.log(i.text)
}*/


//forEach, map, filter
/*todos.forEach(function(i) {
    console.log(i.text);
});*/

/*const todoText = todos.map(function(i) {
    return i.text;
})
console.log(todoText)*/

/*const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted)*/

//console.log(todos[1].text);
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//For Loop
/*for(let i = 0; i < 10; i++) {
    console.log('ForLop Number' + i);
}*/

//While loop
/*let i = 0;
while(i < 10) {
    console.log('While Loop Number' + i)
    i++
}*/

/*const x = 5;
const y = 1;

if(x > 5 || y > 10) { //== matches values only, === matches values and datatypes
    console.log('x is more than 5 or y is more than 10')
} 
/*else if(x > 10) {
    console.log('x is greater than 10')
}
 else {
    console.log('x is less than 10')
}*/

/*const x = 10;
const color = x > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color isnt red or blue');
        break;
}*/

/*function addNums(num1 = 1, num2 = 1) { //default values are 1 and 1 if none are inputed
    return num1 + num2;
} //normal way, a good one

console.log(addNums(3,6));

const addNums = num1 => num1 + 5; //wierd way, confusing, slightly more compressed

console.log(addNums(3));*/

//constructor function; old and not great
/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //built in date class
/*    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    }
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
}*/

//Class; looks way simpler
/*lass Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); //built in date class
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}


//instantiate object
const person1 = new Person('John', 'Doe', '1-2-1900');
const person2 = new Person('Jon', 'Dough', '4-3-1999');

//console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person1);*/


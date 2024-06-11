// Primitive datatype-> it is call by value type datatype
// value is not get referenced, value is get copied

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamic language and not static,
//  which means that variables can hold values
//   of different types during runtime.

const score = 100
const scoreValue = 100.3
console.log( typeof scoreValue) //number
const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);//false

const bigNumber = 235345343463n

// Reference type(Non-Premitive) -> reference is directly alocated in memory

// Array, Object, Functions

const heros = ["hindavi", "kshitija", "Samiksha", "pratibha", "Ankita"]

let myObj = {
    name: "Kadambari",
    age: 11,
}

const myFunction = function(){
    console.log("hello wordld")
}

console.log(typeof scoreValue);//number
console.log(typeof outsidetemp);//object




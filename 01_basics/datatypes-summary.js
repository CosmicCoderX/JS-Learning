// Primitive
// 7 types: Number, String, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber =734242384722736428749223968n

console.log(typeof score, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof bigNumber);

// Reference (Non-Primitve)
// types: Array, Objects, Function

const characters = ["Sukuna", "Saitama", "Sung Jinwoo", "Fug"]

let myObj = {
    name: "Surya",
    age: 20,
}

const myFunction = function() {
    console.log("Hello, World!");
    
}

console.log(typeof myFunction, typeof myObj, typeof characters);

/***************************************************************************************************************************/

// Stack (Primitive),  Heap (Non-Primitive)


// Primitive -->
let myYoutubeName = "suryakantdwivedidotcom"
let anotherName = myYoutubeName
anotherName = "babajiki420dotcom"

console.log(myYoutubeName);
console.log(anotherName);

// Non-Primitive -->
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suryaknt@google.com"

console.log(userOne.email);
console.log(userTwo.email);




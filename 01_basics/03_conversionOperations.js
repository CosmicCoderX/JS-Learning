let score = null

console.log(typeof (score)); //parenthesis ke andar jo variable hai voh ab method ban chuka hai

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN (not a number)
// true => 1; false => 0
// null => 0; undefined => NaN

let isLoggedIn = "Surya"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Surya" => true

let someNumber = 89
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/*********************************************Operation******************************************************************* */

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Surya"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log((5 + 4) * 9 % 3);

// console.log(true+); it gives an error
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++
++gameCounter // prefix
console.log(gameCounter)
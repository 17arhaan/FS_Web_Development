//! Dynamicalyy Typed Language

console.log("this file contains variables knowledge :-")
let a = 18
console.log("Int---->",a)
a = "arhaan"
console.log("Str---->",a)

//* we can assign diff data types to a single variable in JS...

let _name = "Arhaan Girdhar"
console.log(_name)

//* JS is case SENSITIVE...

let A = 17
console.log(a,A)

//* constants are declared in JS using 'const' keyword , whose value can not be changed...

console.log("Constant Example :-")
const B = 27
console.log(B)

// const B = 'Arhaan' //? Error

//* we use 'var' for globally scoped variables and 'let' & 'const' for block scoped...
 
var C = 100
{
    let C = 50
    console.log("Inside Block Value: ",C)
}
console.log("Outside Block Value: ",C)
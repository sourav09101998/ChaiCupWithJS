// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Primitive

// 7 types : String, Numberm Boolean, null, undefined, Symbol, BigInt

const scroe =100
const scroeValue =101.8
const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id =Symbol('123')
const id1 =Symbol('123')

console.log(id === id1);


// reference (non primitive)
// Array, Objects, Functions

const heros = ['krishna', 'balram', "ram"]

let myObj ={
    name : "khana",
    age: 22

}

const myFunction = function() {
    console.log("hare krishan");
    
}

/*
Return type of variables in JavaScript
* Premitive Datatypes

            Type                                   typeof

i)          Number                                  number
ii)         String                                  string
iii)        Boolean                                 boolean
iv)         Bigint                                  bigint
v)          Symbol                                  symbol
vi)         Null                                    object
vii)        Undefined                               undefined


* Non-Premitive OR Referance OR Object datatype

            Type                                typeof

i)          Object                              object
ii)         Array                               object
iii)        Function                            function(object)


       */


// *****************---Memory---*******************
console.log('--------------------------');

// 1.) Stack(permitive) ----  2.) Heap(Non-Primitive) 

let myName = "sourav"

let anotherName = myName

anotherName= "anand"

console.log(myName);
console.log(anotherName);


let userOne = {
    name :'krishan',
    email :'krishna@gamil.com'
}

let userTwo = userOne

userTwo.email='radha@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);

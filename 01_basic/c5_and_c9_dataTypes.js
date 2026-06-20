
//for documentation read = mdn & tc3.es (ecma standards)
// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values




//*********** There are mainly 2 kinds of datatype ****************

/*  

1. Premitive Datatypes (call by value)

               Type                                 typeof

i)            Number                                    number 
ii)           String                                    string
iii)          Boolean   (true/false)                    boolean
iv)           Bigint    (for big number)                bigint
v)            Symbol    (for uniqueness)                symbol
vi)           Null      (means empty value, but not 0)  object
vii)          Undefined (means not assigned value)      undefined



2. Non-Premitive OR Referance OR Object datatype  (call by referance)

                  Type                                  typeof

i)               Object                                 object
ii)              Array                                  object
iii)             Function                            function(object)



***Details of primittive ***
1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.


*/

//Primitive Example : 

let name = "raju" //string data
let age = 25  //number data
let isStudent = true //boolean data
let temperature=null //null data
let village=undefined
let country; // it is pure undefined 

const score=100
const score2=100.5 //int or float don't matter

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) //false  ; Symbol() makes the data differen though they are same
console.log(id == id2) //false

const bigNumber = 52341321151313131n //big int , not needed in reallife



console.log(typeof name) // op = string
console.log(typeof(name)) //op = string  
console.log(typeof "raju") // op = string

console.log(typeof temperature) //object
console.log(typeof country) //undefined
console.log(typeof village) //undefined

console.log(typeof null) // op = object
console.log(typeof undefined) // op= undefined

console.log(typeof id) //symbol
console.log(typeof bigNumber) //bigint



//Non-primitive Example:
 
const heros = ["Ironman", "Antman", "batman"] //Array type

let myobj = {    // Object type
    name : "raju",
    age : 25
}

const myFunction = function (){ //function declaration
    console.log("Hello function") //function defination
}
myFunction(); //function calling


console.log(typeof heros);  //object
console.log(typeof myobj) //object
console.log(typeof myFunction) //function




/* InterView question (from class-9): 

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean


On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.
Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String

*/
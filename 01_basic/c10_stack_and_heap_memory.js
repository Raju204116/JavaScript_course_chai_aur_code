
//Two types of memory : Stack and Heap 

// all the primitive type data goes to Stack ,
// and all the non-primitive type data stores to Heap

/****************************** */
/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.


Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/


/****************************** */

//Example of stack

let myName = "raju"
let anotherName = myName
console.log("AnotherName : " + anotherName)

anotherName = "Raju Ahammed"
console.log("myName : " + myName);
console.log("AnotherName : " + anotherName);



/****************************** */

//object => heap 

let userOne = {
    email: "one@gmail.com",
    branch: "dhaka"
}
let userTwo = userOne
console.log("Usertwo :" , userTwo) //  one@gmail.com    ,  here + is not working 


userTwo.email = "two@gmail.com"
console.log("UserOne :" , userOne) //two@gmail.com
// console.log(userTwo.email);
console.log("Usertwo :" , userTwo) //two@gmail.com


                                        
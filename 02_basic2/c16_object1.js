
//Object means carli braces {}


// there are two types of object

/***************** */
/*1.Singleton object : created with constructor
Ex: 
Object.create //or
const user = new Object()
*/



/************************ */
//2. object literals = {} 

const user = {  //user is the name of this object
    name: "raju", // server/compiler knows the key as a string i.e name is treated as "name"
    "full name": "raju ahammed",
    age: 15,
    email: " abc@gmail.com",
    location: "Dhaka",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]  //array within object

}

/********************* */
//Access method : 2 type
// console.log(user.name)  //raju  => method-1: using dot
// console.log(user["name"]) // raju => method-2: using bracket, this is more useful for multiple value(with space)

// console.log(user.full name)  //we can't access it using dot  
// console.log(user["full name"]) //raju ahammed 




/****************************** */
//Symbol into object (Interview question) 
const mySym = Symbol("outsideObject")
const mySym2 = Symbol("outsideObject2")

const user2 ={
    mySym  : "insideObject",  //this is not wrong,but also not correct syntax to add a symbol inside object
    [mySym2] : "insideObject2" // this syntax is correct 

}

// console.log(user2.mySym) //insideObject
// console.log( typeof user2.mySym)  //String


// console.log(user2 [mySym2]) //insideObject2  => result is same but this is the correct syntax (see the real diff at console.log(user2))
// console.log( typeof user2[mySym2])  // String

//we can see the real difference for whole objects output (look at the key)
// console.log(user2) //{ mySym: 'insideObject',  Symbol(outsideObject2): 'insideObject2' } //here the second Key is showing Symbor().





/****************************** */

//chnage/update the values of object 
 user.email="123@gmail.com"
//  console.log(user) // email is changed

//  Object.freeze(user) //If we don't want to change any value
//  user.email ="xyz@gmail.com"
//  console.log(user) // email is not changed due to freeze


/****************************** */

// object with function

//method-1
user.greeting = function(){
    console.log("Hello this is function")
}
// console.log(user.greeting()) //undefined
user.greeting(); //Hello this is function

//string Interpolation i.e backtick
user.greeting2 =function(){
    console.log(`Hello ${this.name}. I am using String Interpolation `)
}
user.greeting2(); //Hello raju. I am using String Interpolation i.e backtick


/*************** */
//method-2
const users= {
    name : "rj",
    greet : function (){
        console.log("Hello",this.name)
    }
}
users.greet() //Hello rj












//uses of this : to use a variable of an object
const user ={
    userName : "raju",
    age : 25,
    welcomeMsg : function(){
        console.log(`${this.userName} welcome to website.`)
    }
}
// user.welcomeMsg() //raju welcome to website.

// user.userName = "sam"      //updating value
// user.welcomeMsg() //sam welcome to website.





/************context(area) of this**************** */
//showing what the context of this func  inside of Object
const user2 ={
    userName : "raju",
    age : 25,
    welcomeMsg : function(){
        console.log(`${this.userName} welcome to website.`)
        console.log(this) // see the context of this to the output
    }
}
// user2.welcomeMsg() //raju welcome to website. { userName: 'raju', age: 25, welcomeMsg: [Function: welcomeMsg] }

// user2.userName = "sam"
// user2.welcomeMsg() //sam welcome to website. { userName: 'sam', age: 25, welcomeMsg: [Function: welcomeMsg] }



/**************************** */
// outside of Object i.e global  this
const user3 ={
    userName : "raju",
    age : 25,
    welcomeMsg : function(){
        console.log(`${this.userName} welcome to website.`)
    }
}
// console.log(this) // {}    => that means in node mode : context of global this is an empty object.
// but in browser mode context of global this is window. see at browser console =>   console.log(this) 



/********************* */
//inside of a function
const user4 = function () {   
    let userName = "Ispahani"
    console.log(userName) ///Ispahani
    console.log(this) //Object [global]   
}
// user4()










/************* who can use this ************** */
//this func directly can use the key of an Object [see :chai2(), ] ,  but can't use the key/variable of a function [see :chai(),chai3(),chai4() =undefined ]
function chai(){
    let chaiName = "Ispahani"
    console.log(this.chaiName) //undefined    => because this is a variable of a direct function 
}
// chai()  


//works for object's key
const chai2 = {
    chaiName: "Ispahani",
    printName: function () {
        console.log(this.chaiName); //Ispahani
    }
};
// chai2.printName(); 



//NB: inside of object we can't directly use console such as : 
// const chai2 = {
//    chaiName: "Ispahani",
//    console.log(this.chaiName)
// }











/****************Arrow function******************** */
//arrow function : instead of function() keyword we can use an equal&arrow between parenthesis and braces ()=>{}
const chai3 = function () {   //normal function
    let chaiName = "Ispahani"
    console.log(chaiName) ///Ispahani
    console.log(this.chaiName)// undefined
    console.log(this) //Object [global]   => scope/context of this in normal function
}
// chai3() 


const chai4 =  () => {   //arrow function
    let chaiName = "Taza"
    console.log(chaiName) //Taza
    console.log(this.chaiName) //undefined
    console.log(this)  // {}  => scope/context of this in arrow function
}
// chai4() 













/******arrow function with parameter****** */
//Explicit return : Needs to write return keyword
const addTwo = (num1,num2)=>{
    return num1 + num2
}
// console.log(addTwo(5,4)) //9



/*************************************/
//short technique : Implicit return i.e no need to write return keyword

//NB: arrow function er pore carliBraces{} use korle return keyword likhtei hobe,
// but braces{} use na korle , othoba parenthesis() use korle  return keyword likhar dorkar nai.


//without braces{} or parenthesis()
const addTwo2 = (num1,num2)=>num1 + num2
// console.log(addTwo2(5,4)) //9

//using parenthesis ()
const addTwo3 = (num1,num2)=>(num1 + num2)
// console.log(addTwo3(5,4)) //9




/************************* */
//Implicit return for object : need to use both parenthesis() and braces{}
const addTwo4 = (num1,num2)=> ({userName: "raju" } ) 
console.log(addTwo(5,4)) //9



//1.*********if************ */

//syntax :
// if(true){
//     //wii execute
// }

// if(false){
//     //won't execute
// }



////Examples :

// if(2 !=3){
//     console.log("true") //true
// }


// if(3 !="3"){
//     console.log("true") //false
// }

// if(3 !=="3"){
//     console.log("true") //true
// }


/*************************************** */
//2.***************if-else************** */

// const temperature=41
// if(temperature == 40){
//     console.log(" equal to 41") //false
// }else{
//     console.log("not equal to 41") //true
// }


///***************if has a scope ***************** */

// const score =200
// if(score > 100){
//     let power="fly"
//     console.log(`Your Power is : ${power}`)  //Your Power is : fly
// }
// //console.log(`Is it power : ${power}`) //error : power is not defined



/**********Multiple condition of if************ */

// const userLoggedIn = true
// const debitcard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitcard && 2== 2){
//     console.log("Allowe user to buy") //true
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("user logged in") //true
// }



/*************************************** */
//3.***************switch****************** */

//syntax :
// switch(key){
//     case value : 
        
//         break;

//     default:
//         break;
// }

//Trick to duplicate any code : (instead of copy)
/*select the code block, then press 
shift + alt + down arrow
*/


//Example: 

// const month =3
// switch(month){
//     case 1 : 
//         console.log("January");
//         break;
//     case 2 : 
//         console.log("February");
//         break;
//     case 3 : 
//         console.log("March"); //March
//         break; //if we don't use break then after matching the value, it will also execute the next cases too, except default. i.e output will be= march, april
//     case 4 : 
//         console.log("April");
//         break;

//     default:
//         console.log("month not matched")
//         break;
// }



//case value = string
// const month = "april"
// switch(month){
//     case "jan" : 
//         console.log("January");
//         break;
//     case "feb" : 
//         console.log("February");
//         break;
//     case "march" : 
//         console.log("March"); 
//         break; 
//         console.log("April"); //April
//         break;

//     default:
//         console.log("month not matched")
//         break;
// }





/*************************************** */
//4.******************truthi/falsy values****************************/

 //truthy values(these makes the condition true) : "0" , 'false' , empty string with space: " ", empty array: [] ,empty obj: {}, empty function:  function(){}  
 //falsy values(these makes the condition false) :  0 , -0 ,fasle, BigInt 0n ,  Null,  undefined , Nan , empty string without space: "" 


//browser test : go to console and type : 
// false == 0         (output:true), 
// false == ""        (output:true), 
// 0 == ""            (output:true)


 //Code test : 

//case-1 : genuine value
// const userEmail= "rj@gmail.com" 

// if(userEmail){    //condition = true
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }


// case-2 : empty string  
// const userEmail= ""

// if(userEmail){   //condition = false
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }



// case-3 : empty array 
// const userEmail= []

// if(userEmail){   //condition = true
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }



/************************************************** */
//check an array if it is empty or not 
// const userArr = []
// if(userArr.length == 0){
//     console.log("Array is empty")
// }


// //check an object if it is empty or not 
// const myObj = {}
// if(Object.keys(myObj).length == 0){
//     console.log("Object is empty")
// }









 /*************************************** */
//5.***********Nullish coalescing Operator (??)*************/

// let val1;
// val1 = 5 ?? 10
// console.log(val1); //5

// let val2;
// val2 = null ?? 10
// console.log(val2); //10

// let val3;
// val3 = undefined ?? 10
// console.log(val3); //10

// let val4;
// val4 = null ?? 10 ?? 20
// console.log(val4); //10








 /*************************************** */
//6.***********Ternary Operator (? :)*************/

//syntax :   condition ? true : false

const price =100
price >= 80 ? console.log("true") : console.log("false")
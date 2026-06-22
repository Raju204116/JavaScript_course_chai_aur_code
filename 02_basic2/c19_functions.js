
// function means parenthesis ()

/***************************** */
function myFunction (){
    console.log("Hello my name is fun")
}
// myFunction();     // Hello my name is fun   => the function will not work/run untill calling it.



/******************************/
function addTwoNumber(num1,num2){  //these (num1,num2) are called parameters
    console.log("Sum is : ", num1+num2)
}
// addTwoNumber(3,4) //Sum is :  7  => these (3,4) are called arguments 
// addTwoNumber(3,"4") //Sum is :  34
// addTwoNumber(3,"a") //Sum is :  3a
// addTwoNumber(3,null) //Sum is :  3

// const result =addTwoNumber(3,5) //Sum is :  8
// console.log(result) //undefined  => result is undefined because the function doesn't return result





/************************* */
function addTwoNumbers(num1,num2){  
    let result= num1+num2
    return result
}
// const result =addTwoNumbers(3,5) 
// console.log("Result is : " , result) //Result is :  8





/************************* */
//short technique
function addTwoNumbers2(num1,num2){  
    return num1 + num2  //this is short technique
  
}
// const result =addTwoNumbers2(3,5) 
// console.log("Result is : " , result) //Result is :  8




/******************* */
//same parameter with string interpolation amd function call inside console
function loginUserMsg(userName){
    return `${userName} just logged in.` //Interpolation method
}
// console.log(loginUserMsg("Raju")) //Raju just logged in.   => this is more short technique
// console.log(loginUserMsg("")) // just logged in.
// console.log(loginUserMsg())  //undefined just logged in.




/******************* */
//with if but without return
function loginUserMsg2(userName){
    if(userName === undefined){
        console.log("Please enter a username")
        
    }
    return `${userName} just logged in.` 
}
// console.log(loginUserMsg2())  //Please enter a username
                                 // undefined just logged in.




/******************* */
//with if and with return
function loginUserMsg3(userName){
    if(userName === undefined){
        console.log("Please enter a username")
        return  //ei return kaj korle , next line er return ar kaj korbe na.
    }
    return `${userName} just logged in.` 
}
// console.log(loginUserMsg3())    //Please enter a username
                                   //undefined





/************************* */
//return and console working technique
function addTwoNumbers2(num1,num2){  
    console.log("who will work?") //ei console kaj korleo  next line er return kaj korbe 
    return num1 + num2  //kintu ei return kaj korle ar next line er console ar kaj korbe na
    console.log("Does it work ?") //it will not work
}
// const result =addTwoNumbers2(3,5) 
// console.log("Result is : " , result) //Result is :  8





/******************************* */
//uses of NOT(!),  NB: undefined =false, empty string = false
function loginUserMsg4(userName){
    if(!userName ){
        console.log("Please enter a username")
        return  
    }
    return `${userName} just logged in.` 
}
// console.log(loginUserMsg4())  // Please enter a username
                                 //undefined




 /************************** */
 //default parameter
 function loginUserMsg5(userName ="defaultName"){
    if(!userName ){
        console.log("Please enter a username")
        return  
    }
    return `${userName} just logged in.` 
}
console.log(loginUserMsg5()) //ekon eita empty thakleo default name print hobe. =>defaultName just logged in.
console.log(loginUserMsg5("Raju")) //ar value dile seta default ke override kore dibe. =>Raju just logged in.


//Shoping cart problem for multiple item
function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500)) //200 => so here is a problem because we don't know how many items are going to be added



/******************************** */
//to remove that problem we will use spread/rest operator
function calculateCartPrice2(...num1){
    return num1
}
// console.log(calculateCartPrice2(200,400,500)) // [ 200, 400, 500 ] 



/************************* */
//multiple parameter and rest operator (who will work)
function calculateCartPrice3(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice3(200,400,500,2000,50000 )) // [ 500, 2000, 50000 ]= goes to rest operator,   =>200 & 400 will go to val1 & val2




/**************************** */
//passing object as an argument
const user= {
   username : "raju",
   price : 299 
}

function handleObject(anyObject){  //anyObject will receive user object's value
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user);




/**************************** */
//passing direct object's values as an argument
function handleObject2(anyObject){  //anyObject will directly receive the handleObject2's value
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.age}`)
}
// handleObject2({
//     userName : "Ahammed",
//     age : 25
// });




/********************************* */
//passing array as an argument

const myArr =[200,400,100,600]

function returnSecondValue(getArr){
    return getArr[1] // the second value means index 1 
}
// console.log(returnSecondValue(myArr)) //400

//passing direct array values
console.log(returnSecondValue([200,400,500,6000,7000])) //400



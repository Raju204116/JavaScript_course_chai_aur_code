
////multi level scope => Boro vai(Parent func) choto vai er IceCream(data) nite parbe na, but choto vai(child func) boro vai er IceCream nite parbe
// function one(){ //Boro vai
//     const userName="raju"

//     function two(){ //choto vai
//         const age = 25
//         console.log("Accessing Outside of two :",userName) //raju
//     }
//     // console.log("Accessing inside of two :",age) //Error: age is not defined  => because it can't work outside of scope
//     two();
// }
// one();


/**************************** */
////multi level scope at if-else
    if(true){
        const username = "rj"
        if(username === "rj"){
            const age = 20
            console.log(username + age)  //rj20
        }
        // console.log(age); //error: age is not defined
    }
    // console.log(username) //error : username is not defined







/*************************** */    
//hoisting : accessing variable before declaration

// console.log(addTwo(5))  //error : Cannot access 'addTwo' before initialization => this addTwo() won't work , because it is not a direct function, normally its a variable
// const addTwo =function(num){
//     return num +2
// }



/************* */
console.log(addOne(5))  //6  => this addOne() will work , because it is a direct function name
function addOne(num){
    return num +1
}
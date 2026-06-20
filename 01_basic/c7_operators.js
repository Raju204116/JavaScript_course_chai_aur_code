
// let value=3
// let negValue=-value
// console.log(negValue);

//********simple operations ********

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) //2^3 = 8
// console.log(2/3) //0.6666
// console.log(2%3) //2



// ************concatenation************

// let str1="hello"
// let str2=" raju"
// let str3 = str1 + str2 
// console.log(str3) // hello raju



// ************Tricky concatenation************

// console.log("1"+2) //12
// console.log(1 + "2")//12

// //not preferable. 
// console.log("1"+2+2) //122  ; concate by following the first item (string or num)
// console.log(1+2+"2") //32   same

// //use bracket for this case
// console.log("1"+(2+2))//14
// console.log((1+2)+"2") //32

// console.log((3+4)*5%3) //2



// ************tricky conversion************
// console.log(true)//true
// console.log(+true) //1  ;this means true+1 =1


// ********** prefix & postfix *********

// let gameCounter =100
// gameCounter++
// console.log(gameCounter) //101

let gameCounter =100
++gameCounter
console.log(gameCounter) //101 ; here the result is same, but the prefix worked before the operation


/****************************** */
//documentation
// https://tc39.es/ecma262/#sec-toprimitive
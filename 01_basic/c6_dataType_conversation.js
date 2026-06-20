

// let score = 33
// console.log(typeof score) //number




// ************ datatype conversion ***************


//1. convert string to number

// let score = "33"
// console.log(typeof score) //string

//converting the type
// let valueInNumber=Number (score);   
// console.log(typeof valueInNumber); //op = number
// console.log(valueInNumber) // 33


/****************************** */

//2. convert pureString  to number

// let score = "abc" //mix data
// console.log(typeof score) //string

// let valueInNumber=Number (score);  
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // NaN = Not a Number



/****************************** */

//3.convert mixString to number

// let score = "33abc" //mix data
// console.log(typeof score) //string

// let valueInNumber=Number (score);  
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // NaN = Not a Number


/****************************** */

//4.convert null data to number

// let score = null 
// console.log(typeof score) //object

// let valueInNumber=Number (score);  
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 0


/****************************** */

//5. Convert undefined data to number

// let score = undefined 
// console.log(typeof score) //undefined

// let valueInNumber=Number (score);  
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // NaN



/****************************** */

//6.Convert boolean data to  number

// let score = true 
// console.log(typeof score) //boolean

// let valueInNumber=Number (score);  
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber) // 1


/****************************** */

// 7. convert string/number to boolean data

// let isData = 1
// let valueInBoolean = Boolean(isData);
// console.log(valueInBoolean); //true


// let isData = 0
// let valueInBoolean = Boolean(isData);
// console.log(valueInBoolean); //false


// let isData = ""
// let valueInBoolean = Boolean(isData);
// console.log(valueInBoolean); //false


// let isData = "raju"
// let valueInBoolean = Boolean(isData);
// console.log(valueInBoolean); //true 


/****************************** */

//8.Convert Number to String

let num = 33

let valueInString = String(num)
console.log(num) //33
console.log(typeof valueInString) //string
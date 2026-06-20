
/****************************** */
//basic comparison
// console.log(2 > 1) //true
// console.log(2 < 1) //false
// console.log(2 >= 1) //true
// console.log(2 == 1) //false
// console.log(2 != 1) //true



/****************************** */
//mixed comparison

// console.log("2" > 1)  //true  ; the string "2" is converted to a number
// console.log("02" > 1)  //true



/****************************** */
//strict comparison (===)
//NB: === not only checks value but also checks the dataTypes 

console.log("2" === 1) ; //false
console.log("2" === 2) ; //false  ; because the data types are not same







//******null and undefined check*******/
//prefer to avoid

/* equality check (==) and  comparisons check (>= <= > <) works differently.
Comparisons convert null data to a number, treating as 0.
thats why null >=0 is true and null >0 is false. 
*/


// console.log(null > 0) //false ; null i.e 0 is not greater than 0
// console.log(null == 0) //false
// console.log(null >= 0)  //true  ; null i.e 0 is not greater than 0 but equal to 


// console.log(undefined == 0) //false
// console.log(undefined > 0) //false
// console.log(undefined < 0) //false
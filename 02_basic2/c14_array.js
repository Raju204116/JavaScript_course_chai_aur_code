
//Array means bracket []

//documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* SUMMARRY of the class:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/

/****************************** */
//********Examples */

const myArr = [0,1,2,3,4,5] 
const myheros = ["IronMan", "Batman", "SuperMan"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr[0])//0
// console.log(myArr[3]) //3
// console.log(myArr2[3]) //4




/****************************** */

//********Array Methods*****************************

// myArr.push(6) //=> adds at the end
// console.log(myArr) //[ 0, 1, 2, 3, 4, 5,6]  

// myArr.pop() //=> deletes from the end
// console.log(myArr)  //[ 0, 1, 2, 3, 4, 5] 


// myArr.unshift(7) //adds at the first
// console.log(myArr) //[ 7,0, 1, 2, 3, 4, 5]

// myArr.shift() //removes from the first
// console.log(myArr) //[ 0, 1, 2, 3, 4, 5]



// console.log(myArr.includes(9)) //false
// console.log(myArr.indexOf(9)) // -1 
// console.log(myArr.indexOf(3)) // 3



/****************************** */

//join
const myArr3 = myArr.join()

// console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
// console.log(myArr2) //[ 0, 1, 2, 3, 4, 5 ]

// console.log(typeof(myArr)) //object
// console.log(typeof(myArr3)) //string



/****************************** */
//slice
console.log("A", myArr) //A [ 0, 1, 2, 3, 4, 5 ] //original array

const myArr4 = myArr.slice(1,3)  //it will take from index:1 to index:2 ,will not take the 3
console.log(myArr4) //[ 1, 2 ]

console.log("B", myArr) //B [ 0, 1, 2, 3, 4, 5 ] =>original array remains same


/****************************** */
//splice
const myArr5 = myArr.splice(1,3)  //it will take from index:1 to index:3 , will take the 3
console.log(myArr5) //[ 1, 2,3 ]

console.log("C", myArr) // C [ 0, 4, 5 ]  => the original array is changed

/****************************** */
/*Array functions 
 
ƒ at()
ƒ concat()
ƒ Array()
ƒ copyWithin()
ƒ entries()
ƒ every()
ƒ fill()
ƒ filter() 
ƒ find()
ƒ findIndex() 
ƒ findLast()
ƒ findLastIndex()
ƒ flat()
ƒ flatMap()
ƒ forEach()
ƒ includes()
ƒ indexOf()
ƒ join()
ƒ keys()
ƒ lastIndexOf()
ƒ map()
ƒ pop()
ƒ push() 
ƒ reduce()
ƒ reduceRight() 
ƒ reverse()
ƒ shift() 
ƒ slice() 
ƒ some() 
ƒ sort()
ƒ splice()
ƒ toLocaleString()
ƒ toReversed()
ƒ toSorted()
ƒ toSpliced()
ƒ toString() 
ƒ unshift()
ƒ values() 
ƒ with() 
ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object

 */


/****************************** */
//****Exmaples */

const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros= ["superman","flash", "batman"]

// marvel_heros.push(dc_heros) //this will return array inside an array
// console.log(marvel_heros) // [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
// console.log(marvel_heros[3][1]) //flash  => marvel_heros array er 3rd element([dc_heros] er 1st element print korbe)


// const allHeros = marvel_heros.concat(dc_heros) // this will return a single array
// console.log(allHeros) //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]


// const myAllHeros = [...marvel_heros, ...dc_heros]  //this is called Spread(...) 
// console.log(myAllHeros) //[ 'thor', 'IronMan', 'spiderman', 'superman', 'flash', 'batman' ]

/* concat and spread are working same, but spread is more preferable for multiple concatanation */



/****************************** */

const mixed_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const usable_mixed_arr = mixed_arr.flat(Infinity) 
// console.log(usable_mixed_arr) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


/****************************** */

// *Converting string and number to Array => Array.from & Array.of**

// console.log(Array.isArray("raju")) //false
// console.log(Array.from("raju")) // [ 'r', 'a', 'j', 'u' ] =>converts to an array
// console.log(Array.from( {name:"raju"}))  //[] => this time it can't convert because of the mix of key and value, it  require only key or only value -(Interview)


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3)) //[ 100, 200, 300 ]



/****************************** */
const name = "raju"
const result = 50

console.log("Hello " + name + " this is your score " ,  result)
//this is old style of console (using plus and comma to concate)

//use backtick (``) for Modern concate
console.log(`Hello ${name} this is your score too  ${result}`);


/****************************** */


//Modern style of variable define using new object
const name2 = new String("Raju Ahammed")
console.log(name);//raju  => normal variable
console.log(name2) //String {'Raju Ahammed'}  => modern variable print with dataType


/****************************** */

/* All the functions of String ; 
we can see these at browser console :   const name2 = new String("Raju Ahammed")
                                        console.log(name2)

length
[[Prototype]]: String
ƒ anchor()
ƒ at()
ƒ big()
ƒ blink()
f bold()
ƒ charAt()
ƒ charCodeAt()
ƒ codePointAt()
ƒ concat()
ƒ String()
ƒ endsWith()
ƒ fixed()
ƒ fontcolor()
ƒ fontsize()
ƒ includes()
ƒ indexOf()
ƒ isWellFormed()
ƒ italics()
ƒ lastIndexOf() 
ƒ link()
ƒ localeCompare()
ƒ match()
ƒ matchAll() 
ƒ normalize()
ƒ padEnd()
ƒ padStart()
ƒ repeat()
ƒ replace()
ƒ replaceAll()
ƒ search()
ƒ slice()
ƒ small() 
ƒ split() 
ƒ startsWith() 
ƒ strike()
ƒ sub() 
ƒ substr() 
ƒ substring()
ƒ sup() 
ƒ toLocaleLowerCase()
ƒ toLocaleUpperCase()
ƒ toLowerCase() 
ƒ toString()
ƒ toUpperCase()
ƒ toWellFormed() 
ƒ trim()
ƒ trimStart()
ƒ trimEnd()
ƒ valueOf()
ƒ [Symbol.iterator]()

*/

 // **********Examples***********

const myName= new String('mdraju')

console.log(myName.length); // 6
console.log(myName.__proto__); //{} => means prototype is string {}
console.log(myName[1]); //d  => means index:1 of myName is d
console.log(myName.toUpperCase()) // MDRAJU
console.log(myName.charAt(3)) // a
console.log(myName.indexOf('j')) //4


/****************************** */
//substring and slice
// const  myName1= myName.substring(0,4)
// console.log(myName1) //mdra

// const  myName2= myName.slice(-8,3)  //minus can be use for slice
// console.log(myName2) //mdr



/****************************** */

//trim
// const  myName3= "     Raju        Ahammed    "
// console.log(myName3) //     Raju        Ahammed    
// console.log(myName3.trim()) //Raju        Ahammed   =>only start and end space gone

// const fullTrim = myName3.trim().replace(/\s+/g, " "); // this is called regex exp: /\s+/g, " "
// console.log(fullTrim); //Raju Ahammed => all space gone


/****************************** */

//replace
// const url = "https://mdraju.com/raju%20ahammed"

// console.log(url.replace('%20', '-'));  //https://mdraju.com/raju-ahammed
// console.log(url.replace('%20', 'sp')); //https://mdraju.com/rajuspahammed


/****************************** */

//split
const myName4 = "Md-raju-ahammed"
console.log(myName4.split('-')) //  [ 'Md', 'raju', 'ahammed' ] => it finds the string attached with -
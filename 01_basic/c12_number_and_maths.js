
/****************************** */
const score = 400
// console.log(score); //400

// const balance = new Number(500)
// console.log(balance); //[Number: 500]  => value with dataType


/****************************** */
/* All functions of Number 
we can find these in browser console : const balance = new Number(500)
                                        console.log(balance);

[[Prototype]]: Number
ƒ Number()
ƒ toExponential()
ƒ toFixed()
ƒ toLocaleString()
ƒ toPrecision()
ƒ toString()
ƒ valueOf()
*/

// ******Examples**********

// console.log(balance.toString()) // 500 => but it removes the number
// console.log(balance.toString().length) //3

// console.log(balance.toFixed(2)) //500.00
// console.log(balance.toFixed(1)) //500.0


/****************************** */
//toPrecision
const num = 25.4563
// console.log(num.toPrecision(3))  //25.4
// const num2 = 125.4563
// console.log(num2.toPrecision(3))  //125
// const num3 = 125.7563
// console.log(num3.toPrecision(3))  //126
// const num4 = 1235.7563
// console.log(num4.toPrecision(3))  //1.24e+3


/****************************** */
//toLocalString
const value = 1000000
// console.log(value.toLocaleString())  // 1,000,000 => US standards
// console.log(value.toLocaleString('en-IN')) //10,00,000  => Indian Standards
// console.log(value.toLocaleString('en-BD')) //1,000,000  => Bangladeshi Standards 



//**************Math Functions******************

/* Math properties : we can find these in browser console=> console.log(Math)
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2 : 1.4142135623730951

*/


/*Math functions : we can find these in browser console=> console.log(Math)
ƒ abs()
ƒ acos()
ƒ acosh()
ƒ asin()
ƒ asinh()
ƒ atan()
ƒ atan2()
ƒ atanh()
ƒ cbrt()
ƒ ceil()
ƒ clz32()
ƒ cos()
ƒ cosh()
ƒ exp()
ƒ expm1()
ƒ f16round()
ƒ floor()
ƒ fround()
ƒ hypot()
ƒ imul()
ƒ log()
ƒ log1p()
ƒ log2()
ƒ log10()
ƒ max()
ƒ min()
ƒ pow()
ƒ random()
ƒ round()
ƒ sign()
ƒ sin() 
ƒ sinh()
ƒ sqrt()
ƒ sumPrecise()
ƒ tan()
ƒ tanh()
ƒ trunc()
Symbol(Symbol.toStringTag)


*/


//**********Examples************

console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4

// console.log(Math.round(4.3));//4
// console.log(Math.round(4.5)); //5
// console.log(Math.round(4.6)); //5

// console.log(Math.floor(4.3));//4
// console.log(Math.floor(4.9));//4
// console.log(Math.ceil(4.2));//5

// console.log(Math.min(4,3,6,8));//3
// console.log(Math.max (4,3,6,8)); //8

/****************************** */
//random()
// console.log(Math.random()); // It will give a value from : 0 to 1
// console.log(Math.random()); // from 0.00 to 0.9999
// console.log(Math.random()*10); // from 0.00 to 9.999
// console.log((Math.random()*10) + 1); // from 1.000 to 10.999 => +1 uses to avoid the result of 0
// console.log(Math.floor(Math.random() * 10) + 1); // from 1 to 10


/****************************** */
const min =10
const max =20
console.log(Math.floor(Math.random() * (max - min ))) //5
console.log(Math.floor(Math.random() * (max - min +1))) //8
console.log(Math.floor(Math.random() * (max - min +1)) +min)//15 =>greater than min
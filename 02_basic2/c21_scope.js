
//scope means carli braces {} , There are 2 types of scope.
 //1.block or local scope {} : declares inside of the braces , thats why it works insdie of this braces, outside of this braces local scope won't work
 //2.Global scope : declares outside of the braces, so works in the whole program

 //scope usually works with if-else/for loop/functions


/******************** */
//without scope
// let a = 10
// const b =20
// var c=30

// console.log(a) //a  =>this will work properly
// console.log(b)
// console.log(c)




/************************ */
//with scope
// if(true){
//     let a = 10
//     const b =20
//     var c=30   // var is not prefered to use
// }
// //console.log(a) //error(a is not defined)  =>this won't work properly , because a is defined inside of the braces{}
// //console.log(b)  //same

// console.log(c) // 30 => var(c) is working outside of scope, even it will not take the global varible 





/*********************** */
//local and global var  (who will work)
// var c = 300
// if(true){
//     var c=30   // var is not prefered to use
// }
// console.log(c) //30 =>it doesn't recognize the global var c(300)




/*********************** */
//local and global let  (who will work)
// let a = 300
// if(true){
//     let a=30   // 
// }
// console.log(a) //300 => the global let a(300) is working




/**************** */
//both will work for inner console
let a = 300
if(true){
    let a=30  
    console.log("Inner :",a) //Inner : 30
}
console.log(a) //300 => the global let a(300) is working



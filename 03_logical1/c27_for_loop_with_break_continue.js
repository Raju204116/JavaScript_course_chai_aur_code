

//single loop : print 1 to 10

// for( let i = 0 ; i<=10 ; i++){
//     const number = i;
//     console.log("Number is : ", number)
// }


//multiple loop : print namota 
// for( let i = 0 ; i<=5 ; i++){
//     console.log(`outer loop value : ${i}`)
//     for(j=0;j<=5; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }


/********************************* */
//print array 

// let myArr = ["a", "ab", "abc"]
// console.log(myArr.length)
// for(let i=0; i<myArr.length ; i++){
//     const element = myArr[i]
//     console.log(element)
// }


/*************break and continue******************** */

//break : condition true hole stop korbe
// for(let i = 1; i<=10; i++){
//     if(i==5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value of i : ${i}`) // 1 2 3 4
// }



//continue : condition true hole shudu oitake skip korbe
for(let i = 1; i<=10; i++){
    if(i==5){
        // console.log("Detected 5")
        continue;
    }
    console.log(`value of i : ${i}`) // 1 2 3 4    6  7 8 9 10
}

//JavaScript is a single Thread language

/****************** */
//JS Execution Context : mainly 2 type
//1.Global Execution Context
//2.Functional Execution Context
//3.Eval Execution context (only for mongoose)


//Our writen js code executed through 3 phase :
//1.Global Execution Phase : creates a global object :this (only one time:at the starting of the code)
//2.Memory Creation Phase(MCP) : allocates memory for variable
//3.Functional Execution Phase : takes the values and Evaluates the calculations

//Example:
let val1= 10
let val2=5
function addNum(num1,num2){
    let total =num1 + num2
    return total
}
let result1= addNum(val1,val2)
let result2=addNum(20,2)

/********************Process of Execution: *********************/
//1.Global phase : the global execution context of node/browser will be stored at (this) function so that we can use: this.name

//2.Memory Phase: allocates memory
//val1=undefined
//val2=undefined
//addNum=definition only (for line 19 to 22)
//result1=undefined
//result2=undefined

//3.Functional exe phase:
//val1= 10
//val2=5
//result1 = addNum() =It will create a New Variable environment + new Execution thread i.e a new box/area
          //1.Memory Phase: (NB:this time global phase will not work, it works only first time of a code )
                        //val1(not for line-23,for line 19)=undefined 
                        //val2(same)= undefined
                        //total= undefined
          //2.Execution Phase : 
                        //num1=10
                        //num2=5
                        //total=15  and this total will return to Global phase
          //NB: After returning the total value, the new environment will be deleted. and we will go back to Phase-3 again

//result1 =15
//result2= addNum()  = again the same process (only the values are different)         
          //1.Memory Phase: 
                        //val1=undefined 
                        //val2= undefined
                        //total= undefined

          //2.Execution Phase : 
                        //num1=20
                        //num2=2
                        //total=22  and this total will return to Global phase
          //NB: After returning the total value, the new environment will be deleted. and we will go back to Phase-3 again

//result2 =22       





/*****************Call Stack******************** */
//Works on LIFO system : who will store last , he will be out first

//For practical go to : browser >> inspect >> Sources(beside of console) >>snippets (create a new snippet= stacktestjs)
//write this code :save and run, then see the call stack (who is occupying the stack)



//code-1 : simple execution
// function first() {
//     console.log("One"); //one
// }

// function second() {
//     console.log("Two"); //two
// }

// function third() {
//     console.log("Three"); //three
// }

// first();
// second();
// third();



// code-2 : multilevel execution
function first() {
    console.log("One"); //one
    second(); //two three
}

function second() {
    console.log("Two"); //two
    third(); //three
}

function third() {
    console.log("Three"); //three
}

first();
second();
third();
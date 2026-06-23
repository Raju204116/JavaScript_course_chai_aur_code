
//IIFE :  Immediately Invoked Function Expressions
//This is a short/immediate technique of function calling. To remove global scope pollution we can use IIFE.(Interview ans)


//normal calling of function()
function chai(){
    console.log(`DB connected.`)
}
chai(); //DB connected.

// chai() er seshe semicolon deya joruri, nahole niche IIFE kaj korbe na, error asbe, karon JavaScript ভুলভাবে parse করতে পারে previous line chai() ke.
//orthat IIFE block er previous line ke must be end korte hobe semicolon diye .


//Immediate calling of function() : this is called named IIFE (Interview)
(function chai2(){     
    console.log(`DB connected2.`);
})();  //DB connected.  =>//For the first parenthesis(entire function)  become a function expression(or a block) and second one is IIFE.





//IIFE with arrow function : this is called simple IIFE
(()=>{
    console.log(`Db Connected 3`) //Db Connected 3
})();


//IIFE with parameter
( (name)=>{
    console.log(`Hello ${name}. How are you?`)  //Hello raju. How are you?
})('raju'); 
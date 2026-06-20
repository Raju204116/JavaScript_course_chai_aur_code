
// const singletonOb = new Object();
// console.log(singletonOb) //{}

// const nonSingletonOb = {}
// console.log(nonSingletonOb) // {}


/***************** */

const tinderUser = {}
tinderUser.id="12345"
tinderUser.name = "funny"
tinderUser.isLoggedIn= false

// console.log(tinderUser) //{ id: '12345', name: 'funny', isLoggedIn: false }



/**************** */

//objects inside object (Nested Obj)
const regularUser ={     //Parent Obj
    email : "abcd@gmail.com",
    myName : {           //child obj-1
        fullName:{       //child obj-2
            firstName: "raju",
            lastName : "ahammed"
        }
    }
}

// console.log(regularUser.myName) //{ fullName: { firstName: 'raju', lastName: 'ahammed' } }
// console.log(regularUser.myName.fullName) //{ firstName: 'raju', lastName: 'ahammed' }
// console.log(regularUser.myName.fullName.firstName) //raju



/*********************** */
//combine objects

const obj1 = {1:"a", 2 : "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3=  {obj1,obj2}  //this is not the correct syntax
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3= Object.assign(obj1,obj2); //this is also not prefered
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj3= Object.assign({},obj1,obj2); //this is the correct syntax, because the empty object{} is the target obj where the combination will store
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj4 = {...obj1, ...obj2} //this is also prefered syntax (spread method)=>the latest method
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



/**************************** */
//objects inside array (uses for database data)

   const users =[ { 
        id:1,
        email: "a@gmail.com"
    },
    { 
        id:2,
        email: "ab@gmail.com"
    },
    {
         id:3,
        email: "abc@gmail.com"
    }
]

// console.log(users[0]) //{ id: 1, email: 'a@gmail.com' }
// console.log(users[1].email) //ab@gmail.com

// console.log(Object.keys(users)) //[ '0', '1', '2' ]
// console.log(Object.values(users)) 
/* output
[
  { id: 1, email: 'a@gmail.com' },
  { id: 2, email: 'ab@gmail.com' },
  { id: 3, email: 'abc@gmail.com' }
]
*/


console.log(Object.entries(users)) 
/* output
 [
  [ '0', { id: 1, email: 'a@gmail.com' } ],
  [ '1', { id: 2, email: 'ab@gmail.com' } ],
  [ '2', { id: 3, email: 'abc@gmail.com' } ]
]*/


console.log(users.hasOwnProperty('name'))  //false


/*Object Methods : from browser console =>const obj1 = {1:"a", 2 : "b"}
                                          console.log(obj1)
 

[[Prototype]]: Object
ƒ Object()
ƒ hasOwnProperty()
ƒ isPrototypeOf() 
ƒ propertyIsEnumerable()
ƒ toLocaleString() 
ƒ toString()
ƒ valueOf() 
ƒ __defineGetter__()
ƒ __defineSetter__() 
ƒ __lookupGetter__() 
ƒ __lookupSetter__()
ƒ __proto__() :get proto
ƒ __proto__()  :set proto


*/
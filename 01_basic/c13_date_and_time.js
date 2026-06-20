
//**************Date***************** */

//********System Date*******
let myDate = new Date()
 
// console.log(myDate); //2026-06-15T15:41:48.858Z
// console.log(myDate.toString()); //Mon Jun 15 2026 21:42:42 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); // Mon Jun 15 2026
// console.log(myDate.toISOString()); // 2026-06-15T15:42:42.038Z
// console.log(myDate.toJSON()); // 2026-06-15T15:42:42.038Z
// console.log(myDate.toLocaleDateString()); // 6/15/2026
// console.log(myDate.toLocaleTimeString()); // 9:42:42 PM
// console.log(typeof myDate); //object
// console.log(new Date) // 2026-06-15T16:14:22.395Z


//**********Custom Date***************

let myCreatedDate = new Date(2026, 0 , 15) //0 means January
// console.log(myCreatedDate .toDateString()); //Thu Jan 15 2026

// let myCreatedDate2 = new Date(2026, 0 , 15 , 5, 3)  //Hour, Min
// console.log(myCreatedDate2 .toLocaleString()); //1/15/2026, 5:03:00 AM

// let myCreatedDate3 = new Date("2026-03-30") // yyyy-mm-dd
// console.log(myCreatedDate3 .toLocaleString()); // 3/30/2026, 6:00:00 AM

// let myCreatedDate4 = new Date("20-04-2026") // dd-mm-yyyy
// console.log(myCreatedDate4 .toLocaleString()); // Invalid date

// let myCreatedDate5 = new Date("04-20-2026") // mm-dd-yyyy
// console.log(myCreatedDate5 .toLocaleString()); // 4/20/2026, 12:00:00 AM


/****************************** */

//milisec time
let myTimeStamp = Date.now()
// console.log(myTimeStamp) //1781539440404 => ১ জানুয়ারি ১৯৭০, 00:00:00 UTC থেকে এখন পর্যন্ত যত মিলিসেকেন্ড (milliseconds) পেরিয়েছে, সেই সংখ্যা।
// console.log(myCreatedDate.getTime())  //1768413600000 => myCustom date theke ekon porjonto milisec difference


// console.log(Date.now()); //1781539761256  =>১ জানুয়ারি ১৯৭০, 00:00:00 UTC থেকে এখন পর্যন্ত যত মিলিসেকেন্ড (milliseconds) পেরিয়েছে, সেই সংখ্যা।
// console.log(Date.now()/1000); // 1781539761.263 => milisec to sec
// console.log(Math.floor(Date.now()/1000)) //1781539761 



/****************************** */
//get day/month/year/hours

let myDate2 = new Date()
// console.log(myDate2.toDateString()) //Mon Jun 15 2026
// console.log(myDate2.getMonth()); //5 => month starts from 0 index (0=january) , thats why 5=June
// console.log(myDate2.getMonth()+1); // 6 => now june =6 
// console.log(myDate2.getDay()); // 1 => sunday=0, so monday=1
// console.log(myDate2.getFullYear()); //2026

// console.log(myDate2.getHours()); //22
// console.log(myDate2.getMinutes()); //20
// console.log(myDate2.getSeconds()); //54
// console.log(myDate2.getTimezoneOffset());//-360



// ctrl + space for suggestion



/****************************** */
// customization of date/time format
myDate2.toLocaleDateString('default',{
    // weekday : "long" 
    weekday : "short"
})
console.log(myDate2)
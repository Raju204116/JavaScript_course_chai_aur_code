
/***************** */
//Object destructuring
const course ={
    courseName : "Math",
    price: "999",
    courseInstructor:"abc"
}

console.log(course.courseInstructor) //abc =>this is normal accessing

const {courseInstructor}=course // this is destructured
console.log(courseInstructor) //abc

const {courseInstructor : cIns} =course  //this is alias 
console.log(cIns) //abc


/*************** */

//example of destructuring in reactJs 
// const navbar = ({company})=>{
// //
// }
// navbar(company="rjtech")



/*************** */
// Json Api 

//it looks like this :
//  {
//     "name " : "rj",
//     "price" : 999,
//     "cname" : "math"
//  }




// https://randomuser.me/api/?

//to understand it go to https://jsonformatter.org/  =>beutify =>form

/*
{
"results": [
{
"gender": "male",
"name": {
"title": "Mr",
"first": "Ege",
"last": "Hakyemez"
},
"location": {
"street": {
"number": 7115,
"name": "Talak Göktepe Cd"
},
"city": "Bartın",
"state": "Antalya",
"country": "Turkey",
"postcode": 71174,
"coordinates": {
"latitude": "65.1937",
"longitude": "-110.6299"
},
"timezone": {
"offset": "+9:00",
"description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
}
},
"email": "ege.hakyemez@example.com",
"login": {
"uuid": "56db4e1a-7d30-49c3-bd9c-7fa87a80fae1",
"username": "purplerabbit530",
"password": "sunnyday",
"salt": "E1ncJVpR",
"md5": "81ae6f001ca08c56d628c9d898b482dc",
"sha1": "840ba55d56e8709b04e541c988d580c9c24796df",
"sha256": "267b3b0d935e39b13e202ccc37ed30e57be8d77e72e05f6a599e8971055ae17f"
},
"dob": {
"date": "1999-08-09T15:48:45.485Z",
"age": 26
},
"registered": {
"date": "2015-01-26T08:01:21.221Z",
"age": 11
},
"phone": "(465)-096-8072",
"cell": "(142)-869-4415",
"id": {
"name": "",
"value": null
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/54.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
},
"nat": "TR"
}
],
"info": {
"seed": "7fe756685974926f",
"results": 1,
"page": 1,
"version": "1.4"
}
}

*/
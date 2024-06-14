// object literals

const mySym = Symbol("key");
const JsUser = {
    name : "Hindavi",
    "full name":"Hindavi Patil",
    age: 23,
    location: "Pune",
    [mySym]: "myKey1",
    email: "hindavipatil2003@gmail.com",
    isLoggeddIn: false,
    LastLoginDays: ["Monday", "Saturday", "Friday"]
}

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser.LastLoginDays[1]);
console.log(JsUser["email"]);
console.log(typeof JsUser["email"]);
console.log(typeof JsUser.mySym);
console.log(JsUser [mySym]);

JsUser.email = "hindavi.ptl.it@raisoni.net"
// Object.freeze(JsUser);
JsUser.email = "swaraj@gmail.com";
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Hindavi Patil")
}

JsUser.greetingTwo = function(){
    console.log(`hello Hindavi Patil, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

// object singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abck"
tinderUser.name = "Sammy"
tinderUser.isLoggeddIn = false

console.log("(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggeddIn'));

const regularUser = {
    email: "hindaviptl4u@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Hindavi",
            lastname: "Patil"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)

console.log("%%%%%%**************%%%%%%%%%%% Destructure and JSON %%%%%%%%%%%************%%%%%%")

const course = {
    coursename: "js in hindi",
    price: "7897",
    courseInstructor: "hindavi"
}
const {courseInstructor} = course
const {courseInstructor:inta} = course
console.log(inta);

console.log("***************** API ****************")
// JAB BHI AAPAKO AAPAKA KAM KISI KE SAR PE DALNA HAI TO USE API KAHATE HAI

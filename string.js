console.log("************  STRING  **************");

// +++++++++++++++++++++++++++++++++++++++++++++++
// 2 type of memory
// stack(primitive)->jo bhi variable declare kiya hai uska copy milta hai
//,heap(non-primitive)->original value ka reference milta hai
let myYoutubename;
let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "hindaviptl4u@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;

userTwo.email = "hindavihgks@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// +++++++++++++++++++++++++++++++++++++++++++++++
const gameName = new String('hiteshhc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString)

const newStringOne = "   HIndavi      Patil";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());

const url = "https://hitesh.com/hitesh.com/%20hitechchoudary"

console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'))

console.log("*********************************** SPLIT *************************************");

const str = "Hello I am Hindavi Patil A Software developer";
const words = str.split(' ');
console.log(words[3])

const chars = str.split('');
console.log(chars[8]);

const strCopy = str.split();
const strCopy1 = str.split(' ');
console.log(strCopy);
console.log(strCopy1);

console.log("*********************************** start with *************************************"); 
const fun = "Today is Saturday day of happiness";
console.log(fun.startsWith('Tod'))
console.log(fun.startsWith('Tod', 1)) //start index of tod is 1, if yes then it is true

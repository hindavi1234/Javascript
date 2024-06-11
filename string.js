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
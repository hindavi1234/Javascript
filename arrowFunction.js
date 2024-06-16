// ******************* Arrow Function ********************

const user = {
    username:"hindavi",
    price: 200,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage();
user.username = "Hindya";
user.welcomeMessage();

// function chai()
// {
//     let username = "Hindavi"
//     console.log(this.username);
// }
// chai()

const chai = () =>{
     let username = "hitesh"
     console.log(this.username)
}
chai();

// const addTwo = (nums1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (nums1, num2) =>   num1 + num2;
// const addTwo = (num1, num2) => (num1+num2);

const addTwo = (nums1, num2) => ({username: "hinduaa"})
   
console.log(addTwo(12,13));
console.log("+++++++++ Function +++++++++")

// function calculateCartPrice(...num1)
function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}

console.log(calculateCartPrice(200,400,500,600));

// const user = {
//     username: "Hindavi",
//     price: 199
// }

function handleObject(anyproject)
{
    console.log(`username is ${anyproject.username} and the price is ${anyproject.price}`);
}

// handleObject(user);
handleObject({
    username: "Samii",
    price:300
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]))
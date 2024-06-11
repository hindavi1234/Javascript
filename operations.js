let str1 = "Hindavi"
let str2 = "Patil"

let str3 = str1+str2;
console.log(str3);

console.log("1"+2);
console.log(2+"2");

console.log("1"+2+2);
console.log(+true);
console.log(+"");

let gameCounter = 101;
++gameCounter;
console.log(gameCounter++);

/**************************/

let x = 5;
const y = x++;

console.log(`x:${x}, y:${y}`);
//y is constant, so the value can not be changed

let a = 4;
const b = ++a;
console.log(`a:${a}, b:${b}`);
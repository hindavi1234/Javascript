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

// comparison
console.log("2">1);
console.log("04">1);

console.log(null>0)
console.log(null == 0)
console.log(null >= 0)
console.log("_____________________________")
console.log(undefined>0)
console.log(undefined == 0)
console.log(undefined >= 0)
console.log("_____________________________")
console.log("2" === 2)
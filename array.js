console.log("************ ARRAY *************");
const myArr = [0,2,4,8,4,true,"Hindavi"];
console.log(myArr[3])

const myHeros = ["Shaktiman","sidharth","ankita"];
const myArr2 = new Array(0,1,2,3,4,5,6);

console.log(myArr[1]);

// array methods
myArr.push(5);
myArr.push(9);
console.log(myArr);
myArr.pop()
myArr.pop()
console.log(myArr)
myArr.unshift(5);
myArr.unshift(9);
console.log(myArr);
myArr.shift();
myArr.shift();
console.log(myArr);
console.log("******************************************");
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// splice and slice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);
console.log(myn2);


const marvel_heros = ["thor","ironman","spiderMan"];
const dc_heros = ["superman", "flash", "battman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// marvel_heros.concat(dc_heros);
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
const real_another_Array = another_array.flat(Infinity);
console.log(real_another_Array);

console.log(Array.isArray("hiresh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}))

let score1 = 100;
let score2 = 535;
let score3 = 300;

console.log(Array.of(score1,score2,score3))
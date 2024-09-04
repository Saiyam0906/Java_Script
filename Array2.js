const marvel=["thor","ironman","spiderman"]
const dc= ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// not the correct way to add use concat

const a=marvel.concat(dc);
console.log(a)

// better than concat use SPREAD

const b =[...marvel,...dc ]
console.log(b);

const c=[1,2,3,[4,5,6],7,[6,7,[3,2]]]
const d=c.flat(Infinity);
console.log(d);

// Array.from convert it into array

console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))
// instresting case it will give empty array as we didnt type of array we declared


const myArr = [0,1,2,3,4,5];
const myHeroes = ["Caption america","spiderman"]
console.log(myArr[4]);
console.log(myHeroes[0]);



myArr.push(6);
console.log(myArr);

const win = new Array(2,3,4);
console.log(win[0]);

myArr.unshift(9);
console.log(myArr)

myArr.shift();
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(5));


console.log("A "+myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B "+myArr);
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log(myArr)


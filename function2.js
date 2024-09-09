function myname(){
    console.log("my name is Saiyam")
}
myname // it is the references of the function
myname()

function number(no1 , no2){
    console.log(no1 + no2)
}
number(3,4)
number(3,"5")
number(3,"a")
number(3,null)
const ans =number(5,5)
console.log(ans) // it will give u undefined as u havent return the value u just print it

 function no(num1,num2){
       let result = num1 + num2
       return result
}
const addition = no(1,2)
console.log(addition)

function loginuser(username){
    if(username===undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
console.log(loginuser("hitesh"))

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,3000,400,5000))

function cartprice(val1,val2,...num1){
    return num1
}
console.log(cartprice(200,3000,400,5000))

const user={
    username: "Saiyam",
    price:190
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user);
handleobject({
    username:"sam",
    price: 399
})



const myarray = [2020,2021,2022,2023,2024];

function arrayvalue(getarray){
      return getarray[1];
}
console.log(arrayvalue(myarray));
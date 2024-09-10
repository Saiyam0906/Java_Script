function chai(){
    let username="hitesh"
    console.log(this.username);
    
}
chai()

const chais =() =>{
    let username = "hitesh"
    console.log(this.username);
    
}
chais()

const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(5,5));

//implicit return

const addthree = (num1,num2,num3)=> num1+num2+num3
console.log(addthree(1,2,3))

const myarray=[1,2,35,6]
myarray.forEach(()=>{
    console.log(myarray[0])
})
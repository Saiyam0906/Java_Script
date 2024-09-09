//const tinder =new Object()

const tinder ={}

tinder.id=123
tinder.name="saiyam"
tinder.locarion="India"

console.log(tinder["id"]);
console.log(tinder["name"]);
console.log(tinder["locarion"])
Object.freeze(tinder);

const user ={
    email:"Saiyam@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Saiyam",
            lastname:"Bathla",
        }
    }
}
console.log(user.fullname.userfullname.lastname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a",4:"d"}

const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2};
console.log(obj3)
console.log(obj4);

console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLogged'));

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"Hitesh",
}
const {courseInstructor,price,coursename} = course
console.log(courseInstructor);
console.log(price);
console.log(coursename);






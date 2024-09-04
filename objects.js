// singelton like from a constructor using object.create

// object  literals

const my=Symbol("Key1")

const user={
    Name: "Saiyam",
    age : 15,
    Year: 3,
    [my]: "my key1",
    "full name": "Saiyam bathla"
}
console.log(user.Name);
console.log(user["Name"]);
console.log(user["full name"]);
console.log(user[my]);
console.log(typeof user[my]);

user.age=19
//Object.freeze(user)
user.Year=4
console.log(user["age"])
console.log(user["Year"]);

user.greeting = function(){
    console.log("hello js user");
    
}
console.log(user.greeting())





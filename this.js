const user={
    username: "saiyam",
    price:999,
    welcome: function(){
        console.log(`${this.username},welcome to websie`);
        console.log(this);
        
        
    }
}
// user.welcome()
// user.username="sanchit"
// user.welcome()
console.log(this)
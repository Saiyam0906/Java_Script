function one(){
    const username = "saiyam"

    function two(){
        const website = "youtube"
        console.log(1);
        
        console.log(username);
        
    }
    //console.log(website); this will give an error not define outside function
    two()
    
}
console.log(2);
one()

if(true){
    const username = "saiyam"
    if(username == "saiyam"){
       const website = "youtube"
       console.log(username + website);
       
    }
   // console.log(website); this will give error
    
}
//console.log(username); this will also give error
addone()
function addone(num){
    return num+1;
}

//addtwo(5) this will give error as it is stored in a variable cant declare before
const addtwo= function(num){
     return num+2;
}
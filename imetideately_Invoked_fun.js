(function chai(){
    console.log(`DB CONNECTED`);
})();
// IFE IS USED BECAUSE THERE IS A POLLUTION FROM GLOBAL SCOPE THAT WHY IMMEDIATE INVFOKE FUN IS USED

( (name)=>{
    console.log(`DB connected two ${name}`);
})("saiyam")
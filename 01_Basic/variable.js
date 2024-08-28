const accountID=12;
let accEmail="saiyam@gmail.com";
var accPassword="12345";
let accname;

/*
Dont use var because of issue in block and functional scope
*/
console.log(accountID);
console.table([accountID,accEmail,accPassword,accname]);

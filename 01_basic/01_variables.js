const accountId = 123421871287;
let accountEmail = "shubh123@gmail.com";
var accountPassword = "shubh#1234";
accountCity = "pune";

// cost accountId = 12; // not allowed
/*
 do not use var because issue in block scope and functional scope
*/

console.log(accountId); 

accountEmail = "shubh@gmail.com";
accountPassword = "shubh";
accountCity = "islampur";

console.table([accountEmail,accountPassword,accountCity,accountId]);

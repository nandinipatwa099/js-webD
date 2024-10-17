const accountId = 12345
let accountEmail= "nandini@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //this is also reserved memory and store value // but not prefer to use
let accountState;   // ; not create issue in js 

// accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);   //use other method to print all in the screen by console

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
  
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])

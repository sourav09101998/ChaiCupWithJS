const accountId = 144553
let accountEmail = "sourav@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

// accountId = 2 // not allowed

accountEmail = "anand@gmail.com"
accountPassword = "098765"
accountCity = "Pune"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
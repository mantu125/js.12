const accountId = 144553
let accountEmail = "mantu@gmail.com"
var accountPassword = "12345"
accountCity = "Birgunj"
let accountstate;

// accountId = 2 // Not Allowed 

accountEmail = "bvb@.com"
accountPassword = "21212121"
accountCity = "Kathmandu"

console.log(accountId);
// prefer not to use VAR because of issue in block scope and functional scope
console.table([accountEmail, accountPassword, accountCity, accountstate]);

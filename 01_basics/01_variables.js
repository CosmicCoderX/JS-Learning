const accountId = 23031
let accountEmail = "suryakant8493@gmail.com"
var accountPassword = "Surya8493"
accountCity = "Greater Noida"
let accountState = "Uttar Prafesh"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "skd81@gmail.com"
accountPassword = "12345678"
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountState, accountCity])
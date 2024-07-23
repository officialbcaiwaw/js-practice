const accountId=1000001
let accountEmail="officialexample@example.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2  // not allowed

accountEmail="wpexample@gmail.com"
accountPassword="1234"
accountCity="Haryana"


console.table({accountId,accountEmail,accountPassword,accountCity,accountState});


/*
Prefer not to use var
because of issues in block scope and functional scope

*/
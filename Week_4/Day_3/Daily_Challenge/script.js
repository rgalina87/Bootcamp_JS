const users = { user1: 18273, 
				user2: 92833, 
				user3: 90315 }


const array = Object.entries(users)
console.log(array)

let result = Object.keys(users).map(function (key) { 
	return [String(key), users[key]]; 
    }); 

    console.log(result)

let resultBy2 = Object.keys(users).map(function (key) { 
	return [String(key), users[key]*2]; 
    }); 

    console.log(resultBy2)

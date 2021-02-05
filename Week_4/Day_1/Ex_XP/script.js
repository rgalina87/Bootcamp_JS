// Exercise 1

let colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']

colors.forEach((color, index) => {
	console.log(`${++index}# choise is ${color}`)
})


// Exercise 2 

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinal = ["th","st","nd","rd"]

color.forEach((color, i, arr)=>{
let str = (i>3 && i!==0) ? ordinal[0] : ordinal[i];
arr[i] = `${i+1}${str} choice is ${color}`;
})

console.log(color);


// Exercise 3

function is_string(some){
	if (typeof some === "string") {
		return true
	} else {
		return false
	}
}

console.log(is_string('hello')); 

console.log(is_string([1, 2, 4, 0]));

// Exercise 4

let bankAmount = 1000

let vat = 1.17

let details = ["+200", "-100", "+146", "+167", "-2900"]

details.forEach((number, i, details) => {
	details[i] = details[i] * vat;
});
console.log(details)

const summ = details.reduce((total, i) => {
  return total + i;
});
console.log(`Current bank account standing at the end of the month is ${summ + bankAmount}`);




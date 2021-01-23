//Exercise 1: Your Favorite Colors
let colors = {
	first: "red",
	second: "black",
	third: "beije",
	fourth: "grey"
	fav: function(colors) {
	console.log("My #1 is" + this.first + )
	}
}

//Exercise 2: List Of People
let people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people.splice(3, 1, 'Jason')
people.push("IIIIII")
let peop = people.length;
for (var i = 0; i < peop; i++) {
	console.log(people[i]);
}
let people2 =people.slice(0, 4);
	console.log(people === people2)
people.indexOf("Mary")
people.indexOf("Foo")
let last_element = people[people.length - 1];

//Exercise 3: Repeat The Question
prompt(Write a number!);
if(promt <= 10) {
	console.log(good job);
} else {
	prompt(Write another number!);
}

//Exercise 4: Attendance
let ask = prompt("What is your name?")
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

for (let name in guestList) {
  if (name in guestList) {
    console.log("Hi!", name)
  } else {
    console.log("Hi! I'm a guest.")
  }
}

//Exercise 5: Family
let family = {
  mother: "Mary",
  father: "Garry",
  brother: "Terry"
}

for (let property in family) {
  console.log(property);
}

for (let property in family){
  console.log(family[property])
}

//Exercise 6: Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort();
for (var i = 0; i < names.length; i++) {
  console.log(names[i][0]);
}

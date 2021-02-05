//Exercise 1 : Analysing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//all together + bread
// ------2------
const country = "USA";
console.log([...country]);
//"U", "S", "A"
// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//undefined


//Exercise 2 : Employees
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const hi = users.map(item =>{
	return `Hello ${item.firstName}`
})
console.log(hi)
// Using the filter() method, congratulate only the Full Stack Residents.

const cong = users.filter(user => {
      return user.role === "Full Stack Resident"
      })

      console.log(cong)


// Exercise 3 : Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let arr = epic.reduce((total, item) =>
{
	return `${total}  ${item}`
})
console.log(arr)

//Exercise 4 : Employees #2
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

const cong2 = student.filter(st => {
      return st.isPassed === true
      })

      console.log(cong2)

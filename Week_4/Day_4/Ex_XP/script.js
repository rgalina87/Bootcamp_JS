// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//I'm John Doe from Vancouver Canda, Latitude (49.827), Longitude (-123.1207)

// Exercise 2: Display Student Info

 function displayStudentInfo({first, last}){

  return `'Your full name is ${first} ${last}'`
 }
	console.log(displayStudentInfo({first: "John", last: "Doe"}))


// Exercise 3 : Person Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//object

// Exercise 4 : Dog Class
class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// }; //no
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};//YES
  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };//no
//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };//no

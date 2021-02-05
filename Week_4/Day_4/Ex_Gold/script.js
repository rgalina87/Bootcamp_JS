// Exercise 1 : Print Full Name

 function printFullName({first: "Elie", last: "Schoppik"})

 	const {first, last} = FullName;
  return`'Your full name is ${first} ${last}'`
 
	console.log(printFullName())

// Exercise 2 : Counter Class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
//3
//first task//
let array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift()

array.sort()

array.push("Kiwi")

array.splice(0,1)

array.reverse()

console.log(array)

//second task//
let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1])
//or
console.log(array2[1][1][0])

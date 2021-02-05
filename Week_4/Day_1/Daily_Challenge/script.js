const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];


let name = [];
gameInfo.forEach(person => name.push(person.username + "!"));

console.log(name);



let name2 = []

gameInfo.forEach((persone)=>{
	persone.score > 5 ? name2.push(persone.username): "";
	}) 
console.log(name2);


let scoreSum = 0
gameInfo.forEach((persone) =>{
scoreSum += persone.score
})
console.log(scoreSum)




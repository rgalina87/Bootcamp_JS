// Exercise 1 : Analysing Map Method
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// Exercise 2: Analysing Reduce Method
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// Exercise 3 : Analyze This Code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// Exercise 4 : Nested Arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus if you can do it on one line
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
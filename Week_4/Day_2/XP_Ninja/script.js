function mergeWords(string) {
 return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}

// Turn this into a currying function.
const mergeWords = (string) => (nextString) => (nextString === undefinde) ? string : mergeWords(`${string} ${nextString}`)
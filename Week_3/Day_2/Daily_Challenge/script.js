let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');


 let libButton = document.getElementById('lib-button');
        let libIt = function() {
            let storyDiv = document.getElementById("story");
            storyDiv.innerHTML = person.value + " is a " + adjective.value + " " + noun.value + "."
        };

        libButton.addEventListener('click', libIt);



//         find the value of each of the input
// write out a story that uses each of the values
// Make sure you check the console for errors when you play the game.

// function myFunction() {
//   var x = document.forms[0];
//   var txt = "";
//   var i;
//   for (i = 0; i < x.length; i++) {
//     txt = txt + x.elements[i].value + "<br>";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }
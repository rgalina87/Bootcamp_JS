let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');


 let libButton = document.getElementById('lib-button');
        let libIt = function() {
            let storyDiv = document.getElementById("story");
            storyDiv.innerHTML = person.value + " is a " + adjective.value + " " + noun.value + "."
        };

        libButton.addEventListener('click', libIt);



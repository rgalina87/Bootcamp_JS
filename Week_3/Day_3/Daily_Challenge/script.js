        //daily Challenge
        let input = document.querySelector("input");
        input.setAttribute("placeholder","Put only letters")
        input.addEventListener("keyup",function(e){
            this.value = this.value.replace(/[^A-Za-z]/, '');
        });
        

        // let input1 = document.createElement("input")
        document.body.appendChild(input1);




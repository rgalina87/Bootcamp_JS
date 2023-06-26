import React from "react";

class Navbar extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
          <>
            <h3>Superheroes Memory Game</h3>
              <p>Score: </p>
              <p>Total Score: </p>
          </>
        )
    }
}

export default Navbar
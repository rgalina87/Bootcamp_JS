import logo from './logo.svg';
import React from "react";
import superhero from "./SuperheroCards";
import './App.css';
import Navbar from "./component/Navbar";
import Rule from "./component/Rule";
import Cards from "./component/Cards";

class App extends React.Component{
  constructor() {
    super();
    this.state ={
        superhero,
        currentScore: 0,
        highScore: 0,
        clicked: false,
    }
  }

  handleScore = (id) => {
    this.state.superhero.forEach( (item) =>{
        if (id === item.id && item.clicked === false){
            item.clicked = true
            this.setState(clicked = false)
        } else {
    }
  })


  render() {
    return(
      <>
        <Navbar/>
        <Rule/>
        <Cards/>
      </>
    )
  }

}

export default App;

import React from "react"
import logo from './logo.svg';
import './App.css';
import Task from './Task'

class App extends React.Component {
  constructor() {
    super();
  }


render() {
  const myelement = (<h1>I Love JSX!</h1>);

return(
    <>
        <Task myelement/>
    </>
)
}
}
export default App;

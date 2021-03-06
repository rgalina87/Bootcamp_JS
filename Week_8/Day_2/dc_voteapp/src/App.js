import React from 'react'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [
        {id:1, language: "Python", votes: 0},
        {id:2, language: "JavaScript", votes: 0},
        {id:3, language: "C++", votes: 0},
        {id:4, language: "Future New Language", votes: 0}
  ]
    }
  }

  vote (i) {
    let lang = [...this.state.language]
    lang[i].votes++
    function swap(arr, i, j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    this.setState({language:lang})
  }

render() {

    return (
      <>
          <h1>Vote Language</h1>
            <div>
              {
                this.state.language.map((lang, i) =>
                  <div key={i}>
                    <div>{lang.votes}</div>
                    <div>{lang.language}</div>
                    <button onClick={this.vote.bind(this, i)}>Click Here</button>
                </div>
                )
              }
            </div>
      </>
    )
}
}

export default App;

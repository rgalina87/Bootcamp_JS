import logo from './logo.svg';
import React from 'react'
import QuoteanaAuther from './component/QuoteandAuther'
import quotes from "./QuoteDatabase";
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        // quote: quotes[0].quote,
        // author: quotes[0].author,
        quote: '',
        author: '',
      }
  }
    componentDidMount() {
     this.handleClick()
    }
  randomQuote() {
      const randomNumber = Math.floor(Math.random() * quotes.length)
      return quotes[randomNumber]
  }

  handleClick = () => {
      // console.log('something')
      const createRandomQuote = this.randomQuote()
      console.log(createRandomQuote)
      this.setState({
          quote: createRandomQuote.quote,
          author: createRandomQuote.author
      })
  }

  render() {
      const {quote, author} = this.state
    return (
        <>
    <h1>Random Quotes App (React)</h1>

        <QuoteanaAuther
            q = {quote}
            a = {author}
            getqoute = {this.handleClick}
        />
        </>
  );
}
}



export default App;

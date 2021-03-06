import React from "react";
// import 'tachyons'
import Out from "./Out";

class Input extends React.Component{
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            nutsFree: false,
            lactoseFree: false,
            isVegan: false,
        }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {value, name, type, checked} = event.target

        type === 'checkbox'
        ? this.setState({[name]:checked})
         : this.setState({[name]:value})
    }
    render() {
        return (
        <>

        <Out handleChange = {this.handleChange}{...this.state}/>


        </>
        )
    }
}


export default Input
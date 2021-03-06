import React from "react";
// import 'tachyons'

class Out extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>Sample form</h1>
                <form>
                    <input onChange={this.props.handleChange}
                           name = 'firstName'
                           placeholder='First Name'
                           value={this.props.firstName}
                    /> <br/>
                    <input onChange={this.props.handleChange}
                           name = 'lastName'
                           placeholder='Last Name'
                           value={this.props.lastName}
                    /> <br/>
                    <input onChange={this.props.handleChange}
                           name = 'age'
                           placeholder='Age'
                           value={this.props.age}
                    /> <br/>
                    <label>
                    <input onChange={this.props.handleChange}
                           name = 'gender'
                           value = 'male'
                           type='radio'
                           checked={this.props.gender === 'male'}
                    /> Male
                    </label>
                    <br/>
                                        <label>
                    <input onChange={this.props.handleChange}
                           name = 'gender'
                           value = 'female'
                           type='radio'
                           checked={this.props.gender === 'female'}
                    /> Female
                    </label>
                    <br/>
                            <label className="destination-header">Select your destination</label>
        <br />
        <select
          onChange={this.props.handleChange}
          name="destination"
          value={this.props.destination}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <label>Dietary restrictions:</label>
        <div className="restrictions">
          <input
            type="checkbox"
            name="nutsFree"
            onChange={this.props.handleChange}
            checked={this.props.nutsFree}
          />
          <span>Nuts free</span>
          <br />
          <input
            type="checkbox"
            name="lactoseFree"
            onChange={this.props.handleChange}
            checked={this.props.lactoseFree}
          />
          <span>Lactose free</span>
          <br />
          <input
            type="checkbox"
            name="isVegan"
            onChange={this.props.handleChange}
            checked={this.props.isVegan}
          />
          <span>Vegan</span>
        </div>
        <button className="submit">Submit</button>
    </form>
        <h2>Entered information:</h2>
        <p>
          Your name: {this.props.firstName} {this.props.lastName}
        </p>
        <p>Your age: {this.props.age}</p>
        <p>Your gender: {this.props.gender}</p>
        <p>Your destination: {this.props.destination}</p>
        <p>Your dietary restrictions: </p>
        <div className="restrictions">
          <span>**Nuts free : {this.props.nutsFree ? " Yes" : "No"}</span> <br />
          <span>**Lactose free : {this.props.lactoseFree ? " Yes" : "No"}</span>{" "}
          <br />
          <span>**Vegan meal : {this.props.isVegan ? " Yes" : "No"}</span>
        </div>
            </>
        )
    }
}



export default Out
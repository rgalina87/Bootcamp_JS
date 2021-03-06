import React from 'react'

class QuoteandAuther extends React.Component{
    constructor(props) {
        super(props);
        }
    render() {
        const {getqoute, q, a} = this.props
        console.log(getqoute)
    return (
        <>
        <h5>
           "{q}"
        </h5>

         <h6>
           - {a} -
        </h6>
        <button
            onClick={getqoute}
        >
           New Quote
        </button>
        </>
    )
    }


}

export default QuoteandAuther
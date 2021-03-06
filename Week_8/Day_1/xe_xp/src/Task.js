import React from 'react'


const Task = (props) => {
    const {myelement} = props
    return (
        <>
            <h1> Exercise XP</h1>
        <div>
            <h3>Hello World!</h3>
        </div>
            <div>
                {myelement}
            </div>
        </>
    )
}

export default Task
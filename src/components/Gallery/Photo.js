import React from 'react'

const Photo = (props) => {
    return (
        <div className="Photo">
            <h1>{props.name}</h1>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Photo;

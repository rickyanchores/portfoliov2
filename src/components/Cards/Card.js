import React from 'react'

const Card = (props) => {
    return (
        <div className="Card">
            <h1>{props.me}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Card

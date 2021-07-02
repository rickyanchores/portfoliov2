import React from 'react'

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;

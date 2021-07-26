import React from 'react'



const Photo = (props) => {
    return (
        <div className="Photo">
            <img src={props.myImage}/>
            <h1>{props.name}</h1>
            <h3>{props.text}</h3>
            <button>Click Here</button>
        </div>
    )
}

export default Photo;

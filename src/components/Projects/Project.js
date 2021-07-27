import React from 'react'




const Project = (props) => {

    const handleClick = () => {
        console.log('CLICKED')
    }

    return (
        <div className="Project">
            <img src={props.image} />
            <h1>{props.name}</h1>
            <button onClick={ handleClick }><h3>CODE</h3></button>
        </div>
    )
}

export default Project;

import React from 'react'




const Project = (props) => {

    const handleClick = () => {
        //
    }

    return (
        <div className="Project">
            <img src={props.image} />
            <h1>{props.name}</h1>
            <div className="buttons">
                <button onClick={ handleClick }><p>CODE</p></button>
                <button onClick={ handleClick }><p>LIVE</p></button>
            </div>
           
        </div>
    )
}

export default Project;

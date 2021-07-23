import React from 'react'




const Project = (props) => {

    /*
    const projOne = [
        {
            image: 'src/images/kahoii.jpg'
        }
    ]
    */

    return (
        <div className="Project">
            <img src={props.image} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Project;

import React from 'react'
import { Link } from "react-router-dom";



const Project = (props) => {

    const handleClick = () => {
        //
    }

    return (
        <div className="Project">
            <img src={props.image} />
            <h1>{props.name}</h1>
            <div className="buttons">
                <button>
                    <Link to={props.link} target="_blank">LIVE</Link>
                </button>
                <button>
                    <Link to={props.code}>CODE</Link>
                </button>
            </div>
        </div>
    )
}

export default Project;

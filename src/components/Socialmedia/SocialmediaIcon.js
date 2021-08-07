import React from 'react'
import { Link } from "react-router-dom";

const SocialmediaIcon = (props) => {
    return (
        <Link to="" className="SocialmediaIcon">
            <i>{props.icon}</i>
            <h3>{props.name}</h3>
        </Link>
    )
}

export default SocialmediaIcon;

import React from 'react'

const SocialmediaIcon = (props) => {
    return (
        <div className="SocialmediaIcon">
            <i>{props.icon}</i>
            <h3>{props.name}</h3>
        </div>
    )
}

export default SocialmediaIcon;

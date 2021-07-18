import React from 'react'
import SocialmediaIcon from './SocialmediaIcon'

const Socialmedia = (props) => {

    let icon = {
        name: 'Facebook',
        img: ''
    }


    return (
        <div className="Socialmedia">
            <h3>Social Media</h3>
            <SocialmediaIcon name={icon.name} icon={icon.img}/>
        </div>
    )
}

export default Socialmedia;

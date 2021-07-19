import React from 'react'
import SocialmediaIcon from './SocialmediaIcon'

const Socialmedia = (props) => {

    let icon1 = {
        name: 'Facebook',
        img: ''
    }
    let icon2 = {
        name: 'Instagram',
        img: ''
    }
    let icon3 = {
        name: 'Github',
        img: ''
    }


    return (
        <div className="Socialmedia">
            <h3>Social Media</h3>
            <SocialmediaIcon name={icon1.name} icon={icon1.img} />
            <SocialmediaIcon name={icon2.name} icon={icon2.img} />
            <SocialmediaIcon name={icon3.name} icon={icon3.img} />
        </div>
    )
}

export default Socialmedia;

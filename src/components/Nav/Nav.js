import {React, useState} from 'react'
import { Link } from "react-router-dom";


const Nav = () => {

    
    /*
    let hamburger = document.querySelector('.hamburger');
    let navlinks = document.querySelector('.navlinks')

    hamburger.addEventListener('click',() => {
        navlinks.classList.toggle('navActive');
    })
    */
    const [logo,setLogo] = useState('Ricky A');


    const handleClick = () => {
        //insert here event onClick
        setLogo('RA');
    }


    return (
        <div className="Nav">
            <div className="logo" onClick={ handleClick }><h3>{ logo }</h3></div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="navlinks">
                <Link to="/">  
                    <li>Home</li>
                </Link>
                <Link to="/projects">  
                    <li>Projects</li>
                </Link>
                <Link to="/about">  
                    <li>About</li>
                </Link>
                <Link to="/contacts">  
                    <li>Contact</li>
                </Link>
                <Link to="">  
                    <li>Download CV</li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav;

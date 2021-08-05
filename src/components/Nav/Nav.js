import {React, useState} from 'react'
import { NavLink } from "react-router-dom";


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
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="">About</NavLink>
                </li>
                <li>
                    <NavLink to="">Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;

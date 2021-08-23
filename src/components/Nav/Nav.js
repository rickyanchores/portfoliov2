import {React, useState} from 'react'
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"

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
                    <Link smooth to="#home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link smooth to="#projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link smooth to="#about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;

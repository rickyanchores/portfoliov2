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


    const navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "About",
            href: "#about"
        },
    ]

    const handleClick = () => {
        //insert here event onClick
        console.log("Hey")
        let navResponsive = document.querySelector('.Nav')

        navResponsive.style.background = "red"
    }




    return (
        <div className="Nav">
            <div className="logo"><h3>{ logo }</h3></div>
            <div className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="navlinks">
                {
                    navList.slice(0,3).map(link => {
                        return(
                            <li>
                                <Link to={link.href} smooth>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav;

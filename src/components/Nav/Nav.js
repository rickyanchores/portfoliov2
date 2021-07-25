import {React, useState} from 'react'



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
                <li><a href="">Home</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;

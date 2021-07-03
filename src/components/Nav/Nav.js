import React from 'react'

const Nav = () => {

    


    return (
        <div className="Nav">
            <div className="Logo"><h3>Ricky A</h3></div>
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

import React from 'react'
import meSelf from '../../images/me-back.jpg'


const About = () => {

    
    return (
        <div className="About" id="about">
            <img className="about-image" src={meSelf} alt=""/>
            <div className="about-text">
                <h1>About</h1>
                <p>I'm Ricky, a Front End Developer based in London,UK
Web Dev and Design. Well organised person, problem solver, independent employee with high attention to detail. Music and Art passionate</p>
                <h3>Insert Here List of your Tech Stack:</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>LIVE SASS</li>
                    <li>BOOTSTRAP</li>
                    <li>FIGMA</li>
                    <li>REACT JS</li>
                </ul>
            </div>
        </div>
    )
}

export default About;

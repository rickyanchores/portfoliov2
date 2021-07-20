import React from 'react'

const About = () => {

    const image = 'https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80';

    return (
        <div className="About">
            <img className="about-image" src={image} alt=""/>
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

import React from 'react';
import { Link } from "react-router-dom";
import Projects from '../Projects/Projects';
//import meSelf from '../../images/me-front-1.jpeg'



const Home = () => {


    const handleClick = () => {
        // to linkedin
    }
    //https://scontent.fltn2-1.fna.fbcdn.net/v/t31.18172-8/22254883_10210293340394193_3205600766020573504_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=xg0lGNfGlHEAX9zOKwX&_nc_ht=scontent.fltn2-1.fna&oh=d340ab6a0394a16d4ebfadbd885145c6&oe=6120794A
    return (
        <div className="Home">
            <div className="hero-img">
                <img src="https://scontent.fltn2-1.fna.fbcdn.net/v/t31.18172-8/22254883_10210293340394193_3205600766020573504_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=xg0lGNfGlHEAX9zOKwX&_nc_ht=scontent.fltn2-1.fna&oh=d340ab6a0394a16d4ebfadbd885145c6&oe=6120794A" alt="me" />
            </div>
            <div className="hero-title">
                <h3>Hi, name is Ricky Anchores</h3> 
                <h5>Front End Developer</h5>
                <p>Create and Develop modern and minimalist websites</p>
                <button>
                    <Link to={{pathname:"https://www.linkedin.com/feed/"}} target="_blank">Linkedin</Link>
                </button>
            </div>
        </div>
    )
}

export default Home;

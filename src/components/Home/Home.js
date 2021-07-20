import React from 'react'

const Home = () => {

    const handleClick = () => {
        console.log("Hey")
    }

    return (
        <div className="Home">
            <div className="hero-img">
                <img src="https://scontent.fltn2-1.fna.fbcdn.net/v/t31.18172-8/22254883_10210293340394193_3205600766020573504_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=nV7vvI2KnlcAX_uYKNX&_nc_ht=scontent.fltn2-1.fna&oh=50d76de8c87bc1599d2b6a5e35f7e1cb&oe=60F8EC4A" alt="me" />
            </div>
            <div className="hero-title">
                <h3>Hi, name is Ricky Anchores</h3> 
                <h5>Front End Developer</h5>
                <p>Create and Develop modern and minimalist websites</p>
                <button onClick={handleClick}>Check my projects</button>
            </div>
        </div>
    )
}

export default Home;

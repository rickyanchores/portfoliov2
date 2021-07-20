import React from 'react'
import Project from './Project';

const Projects = (props) => {
    //JAVASCRIPT HERE 
    const item = [
        {
            name: 'City Pix',
            image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Sjl5clBhSFhSUVl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        },
        {
            name: 'Zenkana',
            image: 'https://images.unsplash.com/photo-1617360547704-3da8b5363369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60'
        },
        {
            name: 'Kahoii',
            image:'https://images.unsplash.com/photo-1618495293261-3dbcaf9079e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=300&q=60'
        }
    ]

    //
    return (
        <div className="Projects">
            <h1>Projects</h1>
            <Project name={item[0].name} image={item[0].image} />
            <Project name={item[1].name} image={item[1].image} />
            <Project name={item[2].name} image={item[2].image} />
        </div>
    )
}

export default Projects;

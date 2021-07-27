import React from 'react'
import Project from './Project';
//IMPORT IMAGES
import projectOne from '../../images/Citypx.jpg';
import projectTwo from '../../images/zenkana.jpg'
import projectThree from '../../images/kahoii.jpg'




const Projects = (props) => {
    //JAVASCRIPT HERE 
    const item = [
        {
            name: 'City Pix',
            image: projectOne,
            link: "//"
        },
        {
            name: 'Zenkana',
            image: projectTwo
        },
        {
            name: 'Kahoii',
            image: projectThree
        }
    ]

    //
    return (
        <div className="Projects">
            <h1 className="title">Projects</h1>
            <Project name={item[0].name} image={item[0].image} link={item[0].link}/>
            <Project name={item[1].name} image={item[1].image} />
            <Project name={item[2].name} image={item[2].image} />
        </div>
    )
}

export default Projects;

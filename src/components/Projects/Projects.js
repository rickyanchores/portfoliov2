import React from 'react'
import Project from './Project';
//IMPORT IMAGES
import projectOne from '../../images/Citypx.jpg'
import projectTwo from '../../images/zenkana.jpg'
import projectThree from '../../images/kahoii.jpg'
import projectFour from '../../images/rickolor.jpg'
import projectFive from '../../images/todoApp.jpg'

//BTN direct links
const button = [
    {
        address: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
    },
    {
        address: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
    },
    {
        address: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
    }
]

const Projects = (props) => {
    //JAVASCRIPT HERE 
    const item = [
        {
            name: 'City Pix',
            image: projectOne,
            link: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
        },
        {
            name: 'Zenkana',
            image: projectTwo,
            link: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
        },
        {
            name: 'Kahoii',
            image: projectThree,
            link: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"

        },
        {
            name: 'rickolor',
            image: projectFour,
            link: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
        },
        {
            name: 'TODOapp',
            image: projectFive,
            link: "https://www.instagram.com/p/CRrutXerUKNm85rxiUDHGpNPFJVvAKH18-JGx40/"
        },
    ]

    //
    return (
        <div className="Projects">
            <h1 className="title">Projects</h1>
            <Project name={item[0].name} image={item[0].image} link={item[0].link}/>
            <Project name={item[1].name} image={item[1].image} link={item[1].link}/>
            <Project name={item[2].name} image={item[2].image} link={item[2].link}/>
            <Project name={item[3].name} image={item[3].image} link={item[3].link}/>
            <Project name={item[4].name} image={item[4].image} link={item[4].link}/>
        </div>
    )
}

export default Projects;

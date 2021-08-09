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
            link: { pathname: "https://rickyanchores.github.io/CiTYPiX/" },
            code: { pathname:"https://github.com/rickyanchores/CiTYPiX" }
        },
        {
            name: 'Zenkana',
            image: projectTwo,
            link: { pathname: "https://rickyanchores.github.io/zenkana/" } ,
            code: { pathname:"https://github.com/rickyanchores/zenkana" }
        },
        {
            name: 'Kahoii',
            image: projectThree,
            link: { pathname: "https://rickyanchores.github.io/Kahoii/"},
            code: { pathname:"https://github.com/rickyanchores/Kahoii" }

        },
        {
            name: 'rickolor',
            image: projectFour,
            link: { pathname: "https://rickyanchores.github.io/rickolor/"},
            code: { pathname:"https://github.com/rickyanchores/rickolor" }
        },
        {
            name: 'TODOapp',
            image: projectFive,
            link: { pathname: "https://rickyanchores.github.io/todoApp/"},
            code: { pathname:"https://github.com/rickyanchores/todoApp" }
        },
    ]

    //
    return (
        <div className="Projects">
            <h1 className="title">Projects</h1>
            <Project name={item[0].name} image={item[0].image} link={item[0].link} code={item[0].code}/>
            <Project name={item[1].name} image={item[1].image} link={item[1].link} code={item[1].code}/>
            <Project name={item[2].name} image={item[2].image} link={item[2].link} code={item[2].code}/>
            <Project name={item[3].name} image={item[3].image} link={item[3].link} code={item[3].code}/>
            <Project name={item[4].name} image={item[4].image} link={item[4].link} code={item[4].code}/>
        </div>
    )
}

export default Projects;

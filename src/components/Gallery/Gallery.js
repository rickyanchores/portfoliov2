import React from 'react'
import Photo from './Photo'
//import images
import projectOne from '../../images/Citypx.jpg';
import projectTwo from '../../images/rickolor.jpg';
import projectThree from '../../images/zenkana.jpg';


const Gallery = (props) => {

    const photoOne = {
        name: 'Photo One',
        text: 'This is a photo',
        image: projectOne
    }
    const photoTwo = {
        name: 'Photo Two',
        text: 'This is a photo',
        image: projectTwo
    }
    const photoThree = {
        name: 'Photo Three',
        text: 'This is a photo',
        image: projectThree
    }

    return (
        <div className="Gallery">
            <h1>Gallery</h1>
            <Photo name={photoOne.name} text={photoOne.text} myImage={photoOne.image} />
            <Photo name={photoTwo.name} text={photoTwo.text} myImage={photoTwo.image} />
            <Photo name={photoThree.name} text={photoThree.text} myImage={photoThree.image}/>
        </div>
    )
}

export default Gallery;

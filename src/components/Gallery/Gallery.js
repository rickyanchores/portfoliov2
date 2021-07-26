import React from 'react'
import Photo from './Photo'



const Gallery = (props) => {

    const photoOne = {
        name: 'Photo One',
        text: 'This is a photo'
    }
    const photoTwo = {
        name: 'Photo Two',
        text: 'This is a photo'
    }
    const photoThree = {
        name: 'Photo Three',
        text: 'This is a photo'
    }

    return (
        <div className="Gallery">
            <h1>Gallery</h1>
            <Photo name={photoOne.name} text={photoOne.text} myImage={photoOne}/>
            <Photo name={photoTwo.name} text={photoTwo.text}/>
            <Photo name={photoThree.name} text={photoThree.text}/>
        </div>
    )
}

export default Gallery;

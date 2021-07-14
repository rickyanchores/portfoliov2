import React from 'react'
import Photo from './Photo'


const Gallery = (props) => {

    const photoOne = {
        name: 'Photo One',
        text: 'This is a photo'
    }

    return (
        <div className="Gallery">
            <h1>Gallery</h1>
            <Photo name={photoOne.name} text={photoOne.text}/>
        </div>
    )
}

export default Gallery;

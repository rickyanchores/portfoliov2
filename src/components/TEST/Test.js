import React from 'react'
import { useState} from 'react'





const Test = () => {

    


    const [name,setName] = useState('Riko')
    const [message,setMessage] = useState('we love coding');

    const handleClick = () => {
        setName('Lex');
        setMessage('I hate superman');

        setTimeout(() => {
            let testSection = document.querySelector('.Test');

            testSection.style.background = "#333";
            testSection.style.color = "whitesmoke";
        },3000)
    }


    return (
        <div className="Test">
            <h1>{name}</h1>
            <p>{message}</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default Test;

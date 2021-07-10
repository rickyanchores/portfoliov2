import React from 'react'
import { useState} from "react"

const Test2 = () => {

    const [name,setName] = useState('Test2')

    let handleClick = () => {
        setName('Test second')
    }

    return (
        <div className="Test2">
            <h3>{name}</h3>
            <p>this is a second test</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default Test2;

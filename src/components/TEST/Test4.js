import React from 'react'
import { Link } from "react-router-dom";

const Test4 = () => {
    return (
        <div className="Test4">
            <p>This is a test on how to link external "links" with React(router-dom) </p>
            <Link to={{ pathname:"https://coinmarketcap.com/"}} target="_blank">coinmarket</Link>
        </div>
    )
}

export default Test4

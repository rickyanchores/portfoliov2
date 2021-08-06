import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer">
            <h1>Created by Ricky A</h1>
            <ul className="f-media">
                <Link to="" className="link">
                    Gmail
                </Link>
                <Link to="" className="link">
                    Instagram
                </Link>
                <Link to="" className="link">
                    Github
                </Link>
            </ul>
        </div>
    )
}

export default Footer;

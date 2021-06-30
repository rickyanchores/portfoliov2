import React from 'react'
import Card from './Card';

const Cards = (props) => {

    const name = ['Ricky','Alex']
    const text = 'this is my text'

    return (
        <div className="Cards">
            <h1>Cards section</h1>
            <Card me={name[0]} text={text}/>
            <Card me={name[1]} text={text}/>
        </div>
    )
}

export default Cards;

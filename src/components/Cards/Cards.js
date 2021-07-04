import React from 'react'
import Card from './Card';

const Cards = (props) => {

    const name = ['Ricky','Ricardo','Riko']
    const text = 'this is my text'
    const image = ['https://scontent.fltn2-1.fna.fbcdn.net/v/t1.6435-9/45672290_10212986365918148_1538121672387723264_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=tdsY7vvtNykAX80IoBp&tn=NKP7NdeZaTyheVC0&_nc_ht=scontent.fltn2-1.fna&oh=ded8274dd89fbc677f0548b52cdd2969&oe=60E23F83',
    'https://scontent.fltn2-1.fna.fbcdn.net/v/t1.6435-9/70275674_10214941485714921_8756992340024885248_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=3ObC4JTgo9sAX-22cPS&tn=NKP7NdeZaTyheVC0&_nc_ht=scontent.fltn2-1.fna&oh=33a92c7b3ba74b180b93fe4cd8e39fab&oe=60E690BD' ,
    'https://scontent.fltn2-1.fna.fbcdn.net/v/t1.6435-9/44977682_10212921473055867_956608780118786048_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a4a2d7&_nc_ohc=3Xv6OllvavgAX-ZfkQm&tn=NKP7NdeZaTyheVC0&_nc_ht=scontent.fltn2-1.fna&oh=c8066c207d1aaa051833a26b4880d22f&oe=60E2263D'  
] 


    return (
        <div className="Cards">
            <h1>Cards section</h1>
            <Card name={name[0]} text={text} image={image[0]}/>
            <Card name={name[1]} text={text} image={image[1]}/>
            <Card name={name[2]} text={text} image={image[2]}/>
        </div>
    )
}

export default Cards;

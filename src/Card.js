import React from 'react';

const Card = (props) => {
    return <div className="card">
        <img alt={props.name} src={props.imageURL}/>
        <span>{props.name}</span>
    </div>
}

export default Card;
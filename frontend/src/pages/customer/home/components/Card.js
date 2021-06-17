import React from 'react';
import image from '../../../../assets/banner4.jpg';

function Card(props) {
    return (
        <div class="border border-solid rounded-md shadow-md h-auto bg-white shadow-md flex flex-col justify-center items-center cursor-pointer hover:shadow-card">
            <img src={props.image} alt=""/>
            <div>{props.title}</div>
            <div>{props.price}</div>      
        </div>
    )
}

export default Card

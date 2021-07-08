import React from 'react';
import image from '../../../../assets/banner4.jpg';

function Card(props) {
    return (
        <div class="border border-solid rounded-md h-auto bg-white shadow-md flex flex-col justify-center items-center cursor-pointer hover:shadow-card">
            <img src={props.image} alt=""/>
            <div class=" text-sm font-semibold">{props.title}</div>
            <div class="text-redcolor font-bold">{props.price}</div>      
        </div>
    )
}

export default Card

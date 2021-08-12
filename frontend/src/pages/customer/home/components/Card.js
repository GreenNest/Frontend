import React from 'react';
import image from '../../../../assets/banner4.jpg';

function Card(props) {
    return (
        <div class="border border-solid rounded-md h-auto bg-white shadow-md flex flex-col justify-center items-center cursor-pointer hover:shadow-card gap-1">
            <img src={props.image} alt=""/>
            <div class="font-semibold mt-3 tracking-wide text-xl text-green-800">{props.title}</div>
            <div class="text-red-600 font-bold text-base">{props.price}</div>
            <div className="text-base text-green-800">{props.stock}</div>
            <div className="relative flex items-center justify-center w-24 p-1 mb-3 text-sm font-medium text-center transition-colors duration-75 ease-out cursor-pointer bg-mainyellow rounded-2xl hover:bg-yellow-500 hover:text-gray-50">Add to cart</div>
        </div>
    )
}

export default Card

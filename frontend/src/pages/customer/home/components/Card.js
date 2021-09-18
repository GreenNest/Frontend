import React from 'react';
import image from '../../../../assets/banner4.jpg';
import { Link } from "react-router-dom";

function Card(props) {
    const id = props.value;
    const price = props.price.toFixed(2);
    //console.log(id);
    return (
        <div class="border border-solid rounded-md h-auto bg-white shadow-md flex flex-col justify-center items-center cursor-pointer hover:shadow-card gap-1">
            <img src={props.image} alt="" className="w-full h-x"/>
            <div class="font-semibold mt-3 tracking-wide text-xl text-green-800">{props.title}</div>
            <div class="text-red-600 font-bold text-base">Price {price} LKR</div>
            <div className="text-base text-green-800">{props.stock} in stock</div>
            <Link to={"/shop/product/"+id} className="relative flex items-center justify-center w-24 p-1 mb-3 text-sm font-medium text-center transition-colors duration-75 ease-out cursor-pointer bg-mainyellow rounded-2xl hover:bg-yellow-500 hover:text-gray-50">Details</Link>
        </div>
        
    )
}

export default Card

import { Link } from "react-router-dom";
import React from 'react';

function Productcard(props){
    const id = props.id;
    return (
        <Link to={"/shop/product/"+id}>
           <div className="flex flex-col items-center justify-center w-64 h-auto mt-6 mb-5 ml-12 bg-white border-2 border-solid rounded-md cursor-pointer shadow-l hover:shadow-card" key={props.id}>             
                <div className="w-full">
                    <img className="w-full h-52 " src={props.image} alt="not found" width="100%" height="100%"/>
                </div>
                <div className="flex flex-col items-center justify-center m-6 text-green-800">
                    <h2 className="text-xl font-bold">{props.product_name}</h2>
                    <p className="items-center text-base font-bold text-red-600">{props.price}<span>LKR</span></p>
                    <p className="items-center text-base text-seconderygreen">{props.description}</p>
                    <div className="relative flex items-center justify-center w-24 p-1 mt-4 text-sm text-center transition-colors duration-75 ease-out cursor-pointer bg-mainyellow rounded-2xl hover:bg-yellow-500 hover:text-gray-50">Details</div> 
                </div>
          </div>
        </Link>
    )
}

export default Productcard
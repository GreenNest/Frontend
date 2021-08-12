import { Link } from "react-router-dom";
import React from 'react'

const Productcard = (Props) => {
    return (
        <Link to="/shop/product">
           <div className="flex flex-col items-center justify-center w-64 h-auto mt-6 mb-5 ml-12 bg-white border-2 border-solid rounded-md cursor-pointer shadow-l hover:shadow-card" key={Props.id}>             
                <div className="">
                    <img className="w-full h-52 " src={Props.thumb} alt="not found" />
                </div>
                <div className="flex flex-col items-center justify-center m-6 text-green-800">
                    <h2 className="text-xl font-bold">{Props.product_name}</h2>
                    <p className="items-center text-base font-bold text-red-600">{Props.price}<span>{Props.currency}</span></p>
                    <p className="items-center text-base text-seconderygreen">{Props.description}</p>
                    <div className="relative flex items-center justify-center w-24 p-1 mt-4 text-sm text-center transition-colors duration-75 ease-out cursor-pointer bg-mainyellow rounded-2xl hover:bg-yellow-500 hover:text-gray-50">Add to cart</div> 
                </div>
          </div>
        </Link>
    )
}

export default Productcard
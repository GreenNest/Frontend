import { Link } from "react-router-dom";
import React from 'react'

const Productcard = (Props) => {
    return (
        <Link to="/shop/product">
           <div className="w-64 h-auto mb-24 ml-12 mt-6  border-2 border-solid rounded-md bg-white shadow-l flex  flex-col justify-center items-center cursor-pointer hover:shadow-card" key={Props.id}>             
              <div className="">
                  <img className="w-full h-44 " src={Props.thumb} alt="not found" />
              </div>
              <div className="flex justify-center items-center flex-col m-8 text-green-800">
                  <h2 className="text-xl font-bold mb-4">{Props.product_name}</h2>
                  <p className="text-base items-center text-red-600 font-bold">{Props.price}<span>{Props.currency}</span></p>
                  <p className="text-base items-center text-seconderygreen">{Props.description}</p>
                  <div className="w-24 p-1 bg-mainyellow text-sm flex justify-center cursor-pointer items-center text-center relative rounded-2xl transition-colors duration-75 ease-out hover:bg-yellow-500 hover:text-gray-50 mt-8">Add to cart</div>
                  
              </div>
          </div>
        </Link>
    )
}

export default Productcard
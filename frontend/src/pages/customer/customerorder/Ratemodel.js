import React from 'react'
import { FaStar } from 'react-icons/fa';

function Ratemodel() {
    return (
        <div className="absolute bg-white z-50 mt-36 ml-96 p-6 shadow-xl rounded-sm">
           <div>
           <form className="w-96 ">
                <h2 className=" my-6 text-lg font-bold flex justify-center">Reviews & Rate</h2>
                <div className="flex justify-center my-6 space-x-4">
                    <h4 ><FaStar className="text-yellow-600 h-8 w-8"/></h4>
                    <h4 ><FaStar className="text-yellow-600 h-8 w-8"/></h4>
                    <h4 ><FaStar className="text-yellow-600 h-8 w-8"/></h4>
                    <h4 ><FaStar className="text-yellow-600 h-8 w-8"/></h4>
                    <h4 ><FaStar className="text-gray-300 h-8 w-8"/></h4>
                </div>
                <textarea className="w-5/6 h-32 ml-8 border-black border-2"></textarea>
                <div className="flex m-8 justify-center items-center"> 
                <button className="w-24 bg-secondarygreen hover:bg-lightgreen p-2 text-white text-center mr-7 rounded-sm focus:outline-none">Send</button>
                <button className="w-24 bg-redcolor p-2 text-white text-center rounded-sm focus:outline-none">Close</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Ratemodel


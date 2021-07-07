import React from 'react'

function addcategorypopup() {
    return (
        // <div className="w-11/12 h-full ml-28 bg-black border">
            <div className="absolute bg-gray-300 z-50 mt-36 ml-20 p-6 shadow-xl rounded-sm">
        <div>
        <form className="w-96 ">
             <h2 className="ml-20 my-6 text-lg">Add Category</h2>
             <input className="w-5/6 h-16 ml-8 border-black border-2 placeholder-gray-500 placeholder-opacity-100 " placeholder="Enter Category Name"></input>
             <div className="flex m-8 justify-center items-center"> 
             <button className="w-24 bg-secondarygreen hover:bg-lightgreen p-2 text-white text-center mr-7 rounded-sm focus:outline-none">Add</button>
             <button className="w-24 bg-redcolor p-2 text-white text-center rounded-sm focus:outline-none">Close</button>
             </div>
         </form>
        </div>
     </div>
        // </div>
    )
}

export default addcategorypopup

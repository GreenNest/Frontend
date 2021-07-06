import React from 'react'
//absolute bg-green-50 z-50 mt-36 ml-96 p-6 shadow-xl 
//flex space-x-12 m-8 justify-end
function Complaintmodel() {
    return (
        <div className="absolute bg-white z-50 mt-36 ml-96 p-6 shadow-xl rounded-sm">
           <div>
           <form className="w-96 ">
                <h2 className="ml-20 my-6 text-lg font-bold">Write Your Complaint</h2>
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

export default Complaintmodel

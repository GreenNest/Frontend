import React from 'react'

function Complaintmodel() {
    return (
        <div className="absolute  bg-green-50 z-50 mt-36 ml-96 p-6 shadow-xl ">
           <div>
           <form className="w-96 ">
                <h2 className="my-12 ml-20 text-lg">Write Your Complaint</h2>
                <textarea className="w-5/6 h-32 ml-8 border-black border-2"></textarea>
                <div className="flex space-x-12 m-8 justify-end">
                <button className="bg-red-500 w-24 h-12 p-4 text-white">Send</button>
                <button className="bg-green-500 w-24 h-12 p-4 text-white">Close</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default Complaintmodel

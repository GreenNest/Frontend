import React from 'react';
import { Link } from "react-router-dom";

// import Button from "./Button";

const OrderRequestCard = () => {
    return (
        <div className="w-auto p-3 mb-6 border-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-25 border-opacity-25 rounded-lg shadow-xl">
            <div className="flex flex-col gap-y-3">
                <div className="sm:w-3/4 md:w-1/2">
                    <div className="grid grid-cols-2">
                        <p className="text-base font-medium">Product Category : </p>
                        <p>Fruits</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-base font-medium">Item Name : </p>
                        <p>Mango Plant</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-base font-medium">Quantity Requested : </p>
                        <p>15</p>
                    </div>
                </div>
                <div className="">
                    <p>I want to request 15 Mango plants before end of this month. Please let me know your response as soon as possible.Thank you.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between mt-5 md:mx-5">
                <Link to="/moderator/supplierList" type="button" className="flex-initial px-3 py-2 font-bold text-white rounded-md shadow-inner focus:outline-none focus:outline-none bg-maingreen hover:bg-hovergreen">Find Supliers</Link>
                <div className="flex gap-x-3">
                    {/* <Button btnName="Accept" bgcolor="#166534"/>
                    <Button btnName="Decline" bgcolor="#BC4749"/> */}
                    <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold rounded-md py-2 px-4 w-40">Accept</button>
                    <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold rounded-md py-2 px-4 w-40">Decline</button>
                </div>
            </div>
        </div>
    );
}

export default OrderRequestCard;
import React from 'react';
import { Link } from "react-router-dom";

function CheckoutAmount(props) {
    const totalPrice = props.sum;

    return (
        <div>
        {/* Total amount */}
        <div className="w-4/12 m:w-2/12 sm:w-3/12 flex flex-col float-right justify-center items-center bg-gray-200 p-3 rounded-lg  mb-2 mt-64">
        <div className="flex-auto">
            <p className="font-bold">Total Amount</p>
        </div>
        <div className=" flex-auto justify-center grid grid-cols-2 grid-rows-3 grid-flow-col gap-3 mt-3">
            <div className="text-sm float-left">Items cost :</div>
            <div className="font-bold text-sm mt-1">Total :</div>


            <div className="text-sm">{props.sum.toFixed(2)} LKR</div>
            <div className="font-bold text-sm">{totalPrice.toFixed(2)} LKR</div>
        </div>
        <div className="flex-auto mt-4">
            <Link to="#">
                <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded" type="submit">Checkout</button>
            </Link>
        </div>
        
    </div>
    </div>
    )
}

export default CheckoutAmount
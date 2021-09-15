import React from 'react';
import { Link } from "react-router-dom";

function CartAmount(props) {
    const totalPrice = props.sum + 200;
    
    return (
        <div>
        {/* Total amount */}
        <div className="w-4/12 sm:w-2/6 flex flex-col float-right justify-center items-center bg-gray-200 p-2 rounded-lg  mb-2">
        <div className="flex-auto">
            <p className="font-bold">Total Amount</p>
        </div>
        <div className=" flex-auto justify-center grid grid-cols-2 grid-rows-3 grid-flow-col gap-3 mt-3">
            <div className="text-sm float-left">Items cost :</div>
            <div className="text-sm">Delivery cost :</div>
            <div className="font-bold text-sm mt-1">Total :</div>


            <div className="text-sm">{props.sum.toFixed(2)} LKR</div>
            <div className="text-sm"> 200.00 LKR</div>
            <div className="font-bold text-sm">{totalPrice.toFixed(2)} LKR</div>
        </div>
        <div className="mt-4 inline-flex">
            <Link to="checkout">
                <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded mr-4">Cash on Delivery</button>
            </Link>
            <Link to="checkout">
                <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded">Online</button>
            </Link>
            
        </div>
        
    </div>
    </div>
    )
}

export default CartAmount
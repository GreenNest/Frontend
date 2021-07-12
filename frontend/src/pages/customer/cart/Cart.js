import React from 'react';
import CartItem from "./CartItem";
import CartAmount from "./component/CartAmount";
import { MdAssignmentReturn } from 'react-icons/md';
import { Link } from "react-router-dom";
// import "../../../styles/style.css";

const Cart = () => {
    return(
        <div className="min-w-full md:min-w-0 sm:p-20 lg:px-32 -mt-16">
            {/* Alert-No added items to display */}
            {/* <div className="bg-red-100 border border-red-400 text-red-700 px-7 py-3 rounded relative my-5" role="alert">
                <span className="block sm:inline">Your cart is empty !</span>
            </div> */}

            <div className="flex  max-w-7xl  items-center  p-0 rounded-lg mt-2 mb-2 mr-0 ">
                {/* Item */}
                <div className="flex mr-2 ml-64">
                    <button button className="flex font-bold py-1 px-5 rounded border border-gray-500 bg-hovergreen text-white md:border-gray-500">Item</button>
                </div>
                {/* Price */}
                <div className="flex mr-2 ml-28">
                    <button className="flex font-bold py-1 px-5 rounded border border-gray-500 bg-hovergreen text-white md:border-gray-500">Price</button>
                </div>
                {/* Quantity */}
                <div className="flex mr-2 ml-32">
                    <button className="flex font-bold py-1 px-5 rounded border border-gray-500 bg-hovergreen text-white md:border-gray-500">Qty</button>
                </div>
                {/* Subtotal */}
                <div className="flex mr-1 ml-32">
                    <button button className="flex font-bold py-1 px-5 rounded border border-gray-500 bg-hovergreen text-white md:border-gray-500">Subtotal</button>
                </div>
            </div>

            {/* Item components */}
            <CartItem />
            <CartItem />

            {/* Total amount */}
            <CartAmount />
            {/* <div className="w-4/12 m:w-2/12 sm:w-3/12 flex flex-col float-right justify-center items-center bg-gray-200 p-2 rounded-lg  mb-2">
                <div className="flex-auto">
                    <p className="font-bold">Total Amount</p>
                </div>
                <div className=" flex-auto justify-center grid grid-cols-2 grid-rows-3 grid-flow-col gap-3 mt-3">
                    <div className="text-sm float-left">Items cost :</div>
                    <div className="text-sm">Delivery cost :</div>
                    <div className="font-bold text-sm mt-1">Total :</div>


                    <div className="text-sm">1200 LKR</div>
                    <div className="text-sm"> 200 LKR</div>
                    <div className="font-bold text-sm">1400 LKR</div>
                </div>
                <div className="flex-auto mt-4">
                    <Link to="checkout">
                        <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded">Place Order</button>
                    </Link>
                </div>
                
            </div> */}
            <div className="w-44">
            <Link to="shop">
                <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded"><MdAssignmentReturn className="mt-1 mr-1"/> Return to Shop</button>
            </Link> 
            </div>   
        </div>
    );
}

export default Cart;

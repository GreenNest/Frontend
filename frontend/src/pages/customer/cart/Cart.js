import React from 'react';
import CartItem from "./CartItem";
import { MdAssignmentReturn } from 'react-icons/md';
import { Link } from "react-router-dom";
// import "../../../styles/style.css";

const Cart = () => {
    return(
        <div className="min-w-full md:min-w-0 sm:p-20 lg:px-32">
                {/* Alert-No added items to display */}
                <div className="bg-red-100 border border-red-400 text-red-700 px-7 py-3 rounded relative my-5" role="alert">
                    {/* <strong className="font-bold">Alert!</strong> */}
                    <span className="block sm:inline">Your cart is empty !</span>
                </div>

                {/* Item components */}
                <CartItem />
                <CartItem />
                <Link to="shop">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white flex font-bold py-2 px-4 rounded"><MdAssignmentReturn className="mt-1 mr-1"/> Return to Shop</button>
                </Link>
            </div>
    );
}

export default Cart;

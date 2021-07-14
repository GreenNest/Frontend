import React from 'react';
import CartItem from "./CartItem";
import CartAmount from "./component/CartAmount";
import { MdAssignmentReturn } from 'react-icons/md';
import { Link } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
// import "../../../styles/style.css";

const Cart = () => {
    return(
        <>
        <Header />
        <div className="min-w-full mb-5 -mt-8 md:min-w-0 sm:p-20 lg:px-32">
            {/* Alert-No added items to display */}
            {/* <div className="relative py-3 my-5 text-red-700 bg-red-100 border border-red-400 rounded px-7" role="alert">
                <span className="block sm:inline">Your cart is empty !</span>
            </div> */}

            <div className="flex items-center p-0 mt-2 mb-2 mr-0 rounded-lg max-w-7xl ">
                {/* Item */}
                <div className="flex ml-64 mr-2">
                    <button button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Item</button>
                </div>
                {/* Price */}
                <div className="flex ml-32 mr-2">
                    <button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Price</button>
                </div>
                {/* Quantity */}
                <div className="flex ml-32 mr-2">
                    <button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Qty</button>
                </div>
                {/* Subtotal */}
                <div className="flex mr-1 ml-28">
                    <button button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Subtotal</button>
                </div>
            </div>

            {/* Item components */}
            <CartItem />
            

            {/* Total amount */}
            <CartAmount />
            {/* <div className="flex flex-col items-center justify-center float-right w-4/12 p-2 mb-2 bg-gray-200 rounded-lg m:w-2/12 sm:w-3/12">
                <div className="flex-auto">
                    <p className="font-bold">Total Amount</p>
                </div>
                <div className="grid justify-center flex-auto grid-flow-col grid-cols-2 grid-rows-3 gap-3 mt-3 ">
                    <div className="float-left text-sm">Items cost :</div>
                    <div className="text-sm">Delivery cost :</div>
                    <div className="mt-1 text-sm font-bold">Total :</div>


                    <div className="text-sm">1200 LKR</div>
                    <div className="text-sm"> 200 LKR</div>
                    <div className="text-sm font-bold">1400 LKR</div>
                </div>
                <div className="flex-auto mt-4">
                    <Link to="checkout">
                        <button className="flex px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Place Order</button>
                    </Link>
                </div>
                
            </div> */}
            <div className="w-44">
            <Link to="shop">
                <button className="flex px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen"><MdAssignmentReturn className="mt-1 mr-1"/> Return to Shop</button>
            </Link> 
            </div>   
        </div>
        <Footer/>
        </>
    );
}

export default Cart;

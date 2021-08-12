import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from "react-router-dom";
import item from '../../../assets/product_img/mango-tree.jpg';

const CartItem = () => {
    return(
        <div className="flex max-w-7xl justify-start items-center bg-gray-200 p-5 rounded-lg mt-2 mb-2 ">
            {/* Checkbox */}
            <div className="flex-1 mr-2 ml-5 ">
                <input type="checkbox" checked className="checked:bg-blue-600 checked:border-transparent w-5 h-5"></input>
            </div>
            {/* image */}
            <div className="flex-none w-1/12 md:w-2/12 lg:w-1/12 bg-white border-black md:border-black">
                <img className="w-full " src={item} alt="item-img"/>
            </div>
            {/* Item Name*/}
            <div className="flex-auto mr-4 ml-6">
                <Link to="shop/product">
                    <button className="flex font-bold py-2 px-4 rounded border bg-white hover:text-gray-500 border-black md:border-black">Mango Tree - TK2003</button>
                </Link>
            </div>
            {/* Price */}
            <div className="flex-auto mr-4 ml-2">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">200 LKR</button>
            </div>
            {/* * */}
            <div className="flex-auto mr-4 ml-2">
                <button className="flex font-bold py-2 px-0 rounded ">*</button>
            </div>
            {/* Quantity */}
            <div className="flex-auto mr-4 ml-2">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">3</button>
            </div>
            {/* = */}
            <div className="flex-auto mr-4 ml-2">
                <button className="flex font-bold py-2 px-0 rounded">=</button>
            </div>
            {/* Subtotal */}
            <div className="flex-auto mr-4 ml-2">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">600 LKR</button>
            </div>
            {/* Remove item  */}
            <div className="flex-1 ml-4 w-6/12 md:w-2/12 lg:w-2/12 mr-0  justify-center">
                <MdDeleteSweep className="w-7 h-7 hover:text-red-700"/>
            </div>
        </div>
    );
}

export default CartItem;
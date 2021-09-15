import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from "react-router-dom";
import item from '../../../assets/product_img/mango-tree.jpg';
import api from '../../../axiosContact';

function CartItem(props){

    const deleteData = async(id) =>{
        const result = await api.delete(`/cart/delete/${id}`);
    }

    const deleteCartItem = async(id) => {
        const res = await deleteData(id);
        props.getItems();

    }
    return(
        <div className="grid grid-cols-cart w-fill justify-start items-center bg-gray-200 p-5 rounded-lg mt-2 mb-2 ">
            {/* Item Name*/}
            <div className="flex justify-center items-center">
                <Link to={"shop/product/" +props.productId}>
                    <button className="flex font-bold py-2 px-4 rounded border bg-white hover:text-gray-500 border-black md:border-black">{props.name}</button>
                </Link>
            </div>
            {/* Price */}
            <div className="flex justify-center items-center">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">{props.singlePrice.toFixed(2)} LKR</button>
            </div>
            {/* * */}
            <div className="flex justify-center items-center">
                <button className="flex font-bold py-2 px-0 rounded ">*</button>
            </div>
            {/* Quantity */}
            <div className="flex justify-center items-center">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">{props.totalAmount}</button>
            </div>
            {/* = */}
            <div className="flex justify-center items-center">
                <button className="flex font-bold py-2 px-0 rounded">=</button>
            </div>
            {/* Subtotal */}
            <div className="flex justify-center items-center">
                <button className="flex font-bold py-2 px-4 rounded border bg-white border-black md:border-black">{props.price.toFixed(2)} LKR</button>
            </div>
            {/* Remove item  */}
            <div className="flex-1 flex justify-center items-center">
                <MdDeleteSweep className="w-7 h-7 hover:text-red-700 cursor-pointer" onClick={() => deleteCartItem(props.cartId)}/>
            </div>
        </div>
    );
}

export default CartItem;
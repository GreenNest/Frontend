import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { Link, useHistory } from "react-router-dom";
import item from '../../../assets/product_img/mango-tree.jpg';
import api from '../../../axiosContact';
import CustomerService from '../../../services/CustomerService';

function CartItem(props){
    var history = useHistory();

    const deleteData = async(id) =>{
        // const result = await api.delete(`/cart/delete/${id}`);
       const x = await CustomerService.deleteCartItems(parseInt(id)).then((res) => {

        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }
        })

    }

    const deleteCartItem = async(id) => {
        const res = await deleteData(id);
        props.getItems();

    }
    return(
        <div className="grid items-center justify-start p-5 mt-2 mb-2 bg-gray-200 rounded-lg grid-cols-cart w-fill ">
            {/* Item Name*/}
            <div className="flex items-center justify-center">
                <Link to={"shop/product/" +props.productId}>
                    <button className="flex px-4 py-2 font-bold bg-white border border-black rounded hover:text-gray-500 md:border-black">{props.name}</button>
                </Link>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center">
                <button className="flex px-4 py-2 font-bold bg-white border border-black rounded md:border-black">{props.singlePrice.toFixed(2)} LKR</button>
            </div>
            {/* * */}
            <div className="flex items-center justify-center">
                <button className="flex px-0 py-2 font-bold rounded ">*</button>
            </div>
            {/* Quantity */}
            <div className="flex items-center justify-center">
                <button className="flex px-4 py-2 font-bold bg-white border border-black rounded md:border-black">{props.totalAmount}</button>
            </div>
            {/* = */}
            <div className="flex items-center justify-center">
                <button className="flex px-0 py-2 font-bold rounded">=</button>
            </div>
            {/* Subtotal */}
            <div className="flex items-center justify-center">
                <button className="flex px-4 py-2 font-bold bg-white border border-black rounded md:border-black">{props.price.toFixed(2)} LKR</button>
            </div>
            {/* Remove item  */}
            <div className="flex items-center justify-center flex-1">
                <MdDeleteSweep className="cursor-pointer w-7 h-7 hover:text-red-700" onClick={() => deleteCartItem(props.cartId)}/>
            </div>
        </div>
    );
}

export default CartItem;
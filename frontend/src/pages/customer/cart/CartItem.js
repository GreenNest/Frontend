import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
// import item-img from '../../../assets/product_img/mango1.jpg';

const CartItem = () => {
    return(
        <div className="md:flex max-w-7xl mx-auto flex bg-grey-100 p-6 bg-white rounded-lg shadow-lg mt-2 mb-2">
            <div className="md:flex mr-2">
                <input type="checkbox" checked className="checked:bg-blue-600 checked:border-transparent w-5 h-5"></input>
            </div>
            <div className="w-1/12 md:w-2/12 lg:w-2/12 relative border">
                <img className="min-w-full" src="./GreenNest.png" alt="item-img"/>
            </div>
            <div className="md:flex ml-2 w-6/12 md:w-2/12 lg:w-2/12">
                <MdDeleteSweep className="w-8 h-8"/>
            </div>
        </div>
    );
}

export default CartItem;
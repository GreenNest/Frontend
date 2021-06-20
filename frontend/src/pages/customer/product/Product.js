import React, { useState } from 'react';
import Review from './Review';
import RequestPopup from './RequestPopup';
import Productlist from '../Shop/Productlist';
import { Link } from "react-router-dom";

import img1 from '../../../assets/product_img/mango-tree.jpg'
import mango1 from '../../../assets/product_img/mango1.jpg'

const Product = () => {

    const [showRequestPopup,setShowRequestPopup] = useState(false);
    return (
        <div className="min-w-full md:min-w-0 sm:p-20 lg:px-32">
            <div className="shadow-xl md:flex rounded-xl">
                <div className="lg:w-6/12">
                    <img className="min-w-full" src={mango1} alt="Main Image"/>
                    <div className="flex flex-row flex-wrap justify-center py-3 mt-5 mb-5 space-x-8 space-y-5 border-t-2 border-b-2 border-gray-300">
                        <img className="w-32 h-auto mt-5" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto" src={img1} alt="Main Image"/>
                    </div>
                </div>
                <div className="lg:ml-10 sm:mt-10 sm:mx-5">
                    <h1 className="font-sans text-4xl font-bold">Red Mango Plant | F701</h1>
                    <p className="mt-3 text-2xl font-semibold font-moon">Rs. 250.00</p>
                    <div className="mt-10 text-lg font-normal">
                        <p>- FREE Delivery (Kurunagala District only)</p>
                        <p>- Payment Methods : Cash on Delivery / Online Payement</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-lg font-semibold text-secondarygreen">30 in stock</p>
                        <form className="flex mt-5 justify-items-start">
                            <div>
                                <input type="number" className="w-10 h-10 text-2xl text-center rounded" value="1"/>
                            </div>
                            <Link to="" className="h-auto px-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4">ADD TO CART</Link>
                            <Link to="" className="h-auto px-2 font-bold text-white rounded bg-redcolor sm:ml-2 lg:ml-4">BUY NOW</Link>
                            <button type="button" className="h-auto px-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4" onClick={() => setShowRequestPopup(true)}>REQUEST ORDER</button>
                        </form>
                    </div>
                    <div className="mt-16 border-t-2 border-gray-300">
                        <div className="mt-3">
                            <span className="font-medium text-md">CATEGORIES: </span>
                            <a>Fruit Plants</a>,
                            <a>Outdoor Plants</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="text-4xl font-bold text-center text-black text-opacity-70">Item Reviews</div>
                <Review />
                <Review />
                <Review />
            </div>
            <div className="mt-16">
                <div className="text-4xl font-bold text-center text-black text-opacity-70">Related Products</div>
                <Productlist />
            </div>

            { showRequestPopup ? (
                <RequestPopup />
            ): null }
        </div>
    );
}

export default Product;
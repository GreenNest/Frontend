import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Review from './components/Review';
import RequestPopup from './RequestPopup';
import Productlist from '../Shop/Productlist';
import ImageCard from './components/ImageCard';
import StarRating from './components/StarRating';

import customer3 from '../../../assets/customer_img/customer3.jpg';
import customer2 from '../../../assets/customer_img/customer2.jpg'
import customer4 from '../../../assets/customer_img/customer4.jpg'

import img1 from '../../../assets/product_img/mango-tree.jpg';
import mango1 from '../../../assets/product_img/mango1.jpg';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import mango2 from '../../../assets/product_img/mango2.jpeg';

const Product = () => {

    const [showRequestPopup,setShowRequestPopup] = useState(false);
    return (
        <>
        <Header/>
        <div className="min-w-full p-10 sm:p-20 md:px-32">
            <div className="shadow-xl md:flex rounded-xl">
                <div className="md:w-6/12">
                    <img className="min-w-full" src={mango1} alt="Main Image"/>
                    <div className="flex flex-row flex-wrap justify-center py-3 mt-5 mb-5 border-t-2 border-b-2 border-gray-300 gap-x-8 gap-y-5">
                        <ImageCard img1={img1} />
                        <ImageCard img1={mango2} />
                        <ImageCard img1={img1} />
                    </div>
                </div>
                <div className="p-4 md:ml-10 sm:mt-10 sm:mx-5">
                    <h1 className="font-sans text-4xl font-bold">Mango Plant | F701</h1>
                    <p className="mt-3 text-2xl font-semibold text-red-500 font-moon">150LKR</p>
                    <StarRating />
                    <div className="mt-10 text-lg font-normal">
                        <p>- FREE Delivery (Kurunagala District only)</p>
                        <p>- Payment Methods : Cash on Delivery / Online Payement</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-lg font-semibold text-secondarygreen">60 in stock</p>
                        <form className="flex flex-wrap mt-5">
                            <div className="mr-3">
                                <input type="number" className="w-10 h-10 text-2xl text-center border rounded" value="1"/>
                            </div>
                            <div className="flex mt-5 gap-x-3 sm:mt-0 md:gap-x-0 sm:gap-x-0">
                                <Link to="/cart" type="button" className="p-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none">ADD TO CART</Link>
                                <Link to="/checkout" type="button" className="p-2 font-bold text-white rounded bg-redcolor sm:ml-2 lg:ml-4 focus:outline-none hover:bg-lightred">BUY NOW</Link>
                                <div type="button" className="p-2 font-bold text-white rounded cursor-pointer bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none" onClick={() => setShowRequestPopup(true)}>REQUEST ORDER</div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-10 border-t-2 border-gray-300 md:mt-16">
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
                <Review image={customer3} name="Sulakshanee Theja" date="2 days ago" review="Recived a healthy plant, with more than 10 fresh leaves. It was grafted well. The plant was nicely packed in hard cardboard. I have tried few other sellers earlier who were worse and expensive. So this one is comparatively good. After observation of 5 days, its visible that the plant is improving on its growth day by day."/>
                <Review image={customer4} name="Hashan Chandima" date="4 days ago" review="Received a wilted plant (no roots were visible) which didn’t stand a chance to survive even in the rainy conditions. It was not grafted as well. Tried reviving the plant but didn't work out. All leaves dried up and the stem is also drying up. A waste of effort, and money.Don't use this nursary to place order plants."/>
                <Review image={customer2} name="Hiruni Amarakoon" date="10 days ago" review="Recived a healthy plant, with more than 10 fresh leaves. It was grafted well. The plant was nicely packed in hard cardboard. I have tried few other sellers earlier who were worse and expensive. So this one is comparatively good. After observation of 5 days, its visible that the plant is improving on its growth day by day."/>
            </div>
            <div className="mt-16">
                <div className="text-4xl font-bold text-center text-black text-opacity-70">Related Products</div>
                <Productlist />
            </div>

            { showRequestPopup ? (
                <RequestPopup canclePopup={() => setShowRequestPopup(false)}/>
            ): null }
        </div>
        <Footer/>
        </>
    );
}

export default Product;
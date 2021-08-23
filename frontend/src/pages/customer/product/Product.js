import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import CustomerService from '../../../services/CustomerService';
import axios from 'axios';

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
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import mango2 from '../../../assets/product_img/mango2.jpeg';

function Product() { 
    var history = useHistory();
    const [showRequestPopup,setShowRequestPopup] = useState(false);
    const [header, setHeader] = useState(0);
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [number, setNumber] = useState(0);
    const [isloading, setIsloading] = useState(true);
    const [stock, setStock] = useState(0);
    const[message, setMessage] = useState('');
    const x = JSON.parse(localStorage.getItem('authorization'));
    const {id} = useParams();

    useEffect(async () => {
        //console.log(id);
        const storage = await JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
        const values = await axios.get("http://localhost:8080/api/v1/get/product/" +id).then((response) => {
            //console.log(response.data.data);
            setData(response.data.data);
            setImages(response.data.data.subImages);
            //console.log(data.name);
            //console.log(images);
        }).then(setIsloading(false)).catch((err) => {
            console.log(err.response);
        })

    }, []);

    // function addToCart() {
    //     console.log(stock);
    // }

    const addToCart = (evt) => {
        evt.preventDefault();
        if(stock){
            console.log(stock);
            history.push('/cart/3/4')
        }else{
            setMessage("Please select the amount");
        }
        //() => history.push('/login')
    }


    return (
        <>
        {header}
        <div className="min-w-full p-4 sm:pt-20 md:px-20">
            <div className="shadow-xl flex flex-col rounded-xl h-screen w-full">
                <div className="flex flex-row h-2/3 w-full">
                    <img className="w-2/5" src={"data:image/jpeg;base64," +data.mainImage} alt="Main Image"/>
                    <div className="sm:mt-5 mx-5 md:ml-10">
                        <h1 className="font-sans text-4xl font-bold">{data.name}</h1>
                        <p className="mt-3 text-2xl font-semibold text-red-500 font-moon">{data.price} LKR</p>
                        <StarRating />
                        <div className="mt-5 text-lg font-normal">
                            <div>- FREE Delivery (Kurunagala District only)</div>
                            <div>- Payment Methods: Cash on Delivery/ Online Payement</div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-secondarygreen">{data.amount} in stock</p>
                            <div className="text-red-500 text-sm">{message}</div>
                            <form className="flex flex-col flex-wrap mt-5 xl:flex-row w-full">
                                <div className="mr-3">
                                    <input className="w-12 h-12 p-1 text-20 text-center border rounded outline-none" placeholder="1"
                                        type="number"
                                        name="stock"
                                        value={stock}
                                        onChange={e => setStock(e.target.value)}/>
                                </div>
                                <div className="flex mt-5 gap-x-3 sm:mt-0 md:gap-x-0 sm:gap-x-0">
                                    {/* <Link to="/cart" type="button" className="p-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none">ADD TO CART</Link> */}
                                    <button className="p-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none" onClick={addToCart}>ADD TO CART</button>
                                    <Link to="/checkout" type="button" className="p-2 font-bold text-white rounded bg-redcolor sm:ml-2 lg:ml-4 focus:outline-none hover:bg-lightred flex justify-center items-center">BUY NOW</Link>
                                    <button className="p-2 font-bold text-white rounded cursor-pointer bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none" onClick={() => setShowRequestPopup(true)}>REQUEST ORDER</button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-3 border-t-2 border-gray-300 md:mt-6 w-full">
                            <div className="mt-3">
                                <span className="font-medium text-md">CATEGORIES: </span>
                                <a>Fruit Plants</a>,
                                <a>Outdoor Plants</a>
                            </div>
                            <div className="mt-3">
                                <span className="font-medium text-md">Description: {data.description}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-row flex-wrap mt-3 justify-start h-full items-center border-t-2 border-b-2 border-gray-300 gap-x-8">
                    <ImageCard img1={"data:image/jpeg;base64," +images[0]} />
                    <ImageCard img1={"data:image/jpeg;base64," +images[1]} />
                    <ImageCard img1={"data:image/jpeg;base64," +images[2]} />
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
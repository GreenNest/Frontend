import React from 'react';
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartAmount from "./component/CartAmount";
import { MdAssignmentReturn } from 'react-icons/md';
import { Link, useHistory, useParams } from "react-router-dom";
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import CustomerService from '../../../services/CustomerService';
import axios from 'axios';
// import "../../../styles/style.css";

function Cart() {
    var history = useHistory();
    const [header, setHeader] = useState(0);
    const { amount, id } = useParams();
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [cartList, setCartList] = useState([]);

    //check the local storage date
    //const x = JSON.parse(localStorage.getItem('authorization'));
    console.log(amount);
    console.log(id);

    useEffect(async () => {
        const storage = await JSON.parse(localStorage.getItem('authorization'));
        if(!storage){
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
        });

        // if(status === "true"){
        //     setCartList(cartList.concat(<CartItem key={cartList.length} image={"data:image/jpeg;base64," +data.mainImage} price={data.price} name={data.name} totalAmount={amount}/>))
        // }
        
    }, [])

    return(
        <>
        {header}
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
            {/* <CartItem image={"data:image/jpeg;base64," +data.mainImage} price={data.price} name={data.name} totalAmount={amount}/> */}
            

            {/* Total amount */}
            <CartAmount />
            
            <div className="w-44">
            <Link to="/shop">
                <button className="flex px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen"><MdAssignmentReturn className="mt-1 mr-1"/> Return to Shop</button>
            </Link> 
            </div>   
        </div>
        <Footer/>
        </>
    );
}

export default Cart;

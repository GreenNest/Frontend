import React from 'react';
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartAmount from "./component/CartAmount";
import { MdAssignmentReturn } from 'react-icons/md';
import { Link, useHistory, useParams } from "react-router-dom";
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import api from '../../../axiosContact';

function Cart() {
    var history = useHistory();
    const [header, setHeader] = useState(0);
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [cartList, setCartList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        getCartItems();   
        getHeader();         
    }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    };

    const getCartItems = async() => {
        const y = JSON.parse(localStorage.getItem('authorization'));
        const id =  parseInt(y.id);
        const result = await api.get(`/cart/get/${id}`);
        if(result){
            setData(result.data.data);
            
        }
    } 

    const calculation = (res) => {
        let total = 0;
        res.map((x) => {
                total= total+ x.price;
            })
        return total;
    }

    


    return(
        <>
        {header}
        <div className="min-w-full mb-5 -mt-8 md:min-w-0 sm:p-20 lg:px-32">
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
            {
                data.length != 0 ? ( 
                    data.map((item) => (
                        <CartItem name={item.name} price={item.price} totalAmount={item.quantity} key={item.id} cartId={item.id} getItems={getCartItems} productId={item.product_id}/>
                    )) 
                ) : <h4 className="m-auto mt-10 text-xl font-medium">
                        Empty Cart.
                    </h4>
            }
            
            <CartAmount sum={calculation(data)}/>
            
        </div>
        <Footer/>
        </>
    );
}

export default Cart;

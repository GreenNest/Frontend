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
import CustomerService from '../../../services/CustomerService';

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
            history.push("/login");
        }else{
            if(!x.roles.includes("customer")){
                history.push("/error");
            }
            setHeader(<SignedHeader/>)
        }
    };

    const getCartItems = async() => {
        const y = JSON.parse(localStorage.getItem('authorization'));
        const id =  parseInt(y.id);

        CustomerService.getCartItems(id).then((result) => {
            if(result.data.data != null){
            setData(result.data.data);
            console.log(result.data.data); 
            }
        }).catch((err) => {
            // if(err.response.status == 401){
            //     history.push("/login");
            // }
        })
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
        <div className="min-w-full mb-5 -mt-8 md:min-w-0 sm:p-20 lg:px-32 ">
            <div className="grid w-full p-6 mb-4 text-xl font-bold bg-gray-500 grid-cols-cart item-center">
                {/* Item */}
                <div className="flex items-center justify-center">
                    <button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Item</button>
                </div>
                {/* Price */}
                <div className="flex items-center justify-center">
                    <button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Price</button>
                </div>
                <div className="flex items-center justify-center"></div>
                {/* Quantity */}
                <div className="flex items-center justify-center ">
                    <button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Quantity</button>
                </div>
                {/* Subtotal */}
                <div className="flex items-center justify-center"></div>
                <div className="flex items-center justify-center">
                    <button button className="flex px-5 py-1 font-bold text-white rounded bg-hovergreen md:border-gray-500" disabled>Subtotal</button>
                </div>
                <div className="flex items-center justify-center"></div>
            </div>
            {
                data.length != 0 ? ( 
                    data.map((item) => (
                        <CartItem name={item.name} price={item.price} totalAmount={item.quantity} key={item.id} cartId={item.id} getItems={getCartItems} productId={item.product_id} singlePrice={item.singlePrice}/>
                    )) 
                ) : <h4 className="m-auto mt-10 text-xl text-red-700 font-medium">
                        Your Cart is Empty!
                        {/* <div className="flex-auto mt-4"> */}
                            <Link to="/shop">
                                 <button className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 mt-2 rounded">Back to Shop</button>
                            </Link>
                        {/* </div> */}
                    </h4>
                    
            }
            
            <CartAmount sum={calculation(data)}/>
            
        </div>
        <Footer/>
        </>
    );
}

export default Cart;

import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutAmount from "./component/CheckoutAmount";
import './style/checkout.css';
import * as FaIcons from "react-icons/fa";
import { faUser, faEnvelope, faAddressCard, faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import CustomerService from '../../../services/CustomerService';


function Checkout(){
    var history = useHistory();
    const [header, setHeader] = useState(0);
    const x = JSON.parse(localStorage.getItem('authorization'));

    useEffect(async () => {
        if(!x){
            //history.push("/login");
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
       
    }, [])

    return(
        <>
        {header}
{ /* <div className="w-11/12 mt-8 mb-8 m */}
        <div className="w-11/12 mt-12 mb-8 ml-12">
            <div className=""><CheckoutAmount className=""/></div>
            <div className="row">
            <div className="col-75">
                <div className="container bg-gray-500 bg-opacity-25 rounded-md">
                    <form id="validate" action="/action_page.php">
                        <div className="row">
                            <div className="col-50">
                                <div className="m-4 ml-0 text-lg font-bold text-maingreen">Billing Address</div>
                                <label className="text-sm font-medium" for="fname"><FontAwesomeIcon icon={faUser} /> Full Name</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="fname" name="fullname" placeholder="Hashan Kumarasinghe" required/>
                                <label className="text-sm font-medium" for="email"><FontAwesomeIcon icon={faEnvelope} /> Email</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="email" name="email" placeholder="example@gmail.com" required/>
                                <label className="text-sm font-medium" for="adr"><FontAwesomeIcon icon={faAddressCard} /> Address</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="adr" name="address" placeholder="448/1, Mathawa Kohilegedara" required/>
                                <label className="text-sm font-medium" for="city"><FontAwesomeIcon icon={faCity} /> City</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="city" name="city" placeholder="Kurunegala" required/>

                                <div class="row">
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="state">State</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="state" name="state" placeholder="North Western"required/>
                                    </div>
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="zip">Zip</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="zip" name="zip" placeholder="60028"required/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-50">
                            <div className="justify-center mt-4 mb-6 ml-0 text-lg font-bold text-maingreen">Payment</div>
                                <label className="text-sm font-medium ml-36" for="fname">Accepted Cards</label>
                                <div class="icon-container flex justify-center space-x-4">
                                    {/* <i class="fa fa-cc-visa" style="color:navy;"></i> */}
                                    <FaIcons.FaCcVisa className=""/>
                                    <FaIcons.FaCcAmex />
                                    <FaIcons.FaCcMastercard />
                                    <FaIcons.FaCcDiscover />
                                    {/* <i class="fa fa-cc-amex" style="color:blue;"></i>
                                    <i class="fa fa-cc-mastercard" style="color:red;"></i>
                                    <i class="fa fa-cc-discover" style="color:orange;"></i> */}
                                </div>

                                <label className="text-sm font-medium" for="cname">Name on Card</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="cname" name="cardname" placeholder="Hashan Kumarasinghe"required/>
                                <label className="text-sm font-medium" for="ccnum">Credit card number</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"required/>
                                <label className="text-sm font-medium" for="expmonth">Exp Month</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="expmonth" name="expmonth" placeholder="September"required></input>

                                <div class="row">
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="expyear">Exp Year</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="expyear" name="expyear" placeholder="2021"required/>
                                    </div>
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="cvv">CVV</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="cvv" name="cvv" placeholder="352"required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label>
                        <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                        </label>
                        <button className="justify-center p-4 px-4 py-3 mt-3 mb-2 ml-56 text-lg font-bold text-white rounded bg-maingreen hover:bg-hovergreen w-96">Continue to Checkout</button>
                    </form>
                </div>
            </div>
            
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default Checkout;
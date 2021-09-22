import React from 'react';
import { useEffect, useState } from "react";
import { Link, useHistory,Redirect } from "react-router-dom";
import CheckoutAmount from "./component/CheckoutAmount";
import './style/checkout.css';
import * as FaIcons from "react-icons/fa";
import { faUser, faEnvelope, faAddressCard, faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import CustomerService from '../../../services/CustomerService';
import api from '../../../axiosContact';


function Checkout(props){
    const totalPrice = props.sum + 200;
    var history = useHistory();
    const [header, setHeader] = useState(0);
    const x = JSON.parse(localStorage.getItem('authorization'));
    const [data, setData] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [first_name, setFname] = useState('');
    const [last_name, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [orderId, setOrderId] = useState(0);



    useEffect(() => {
        getCartItems();   
        getHeader();         
    }, [])

    useEffect(async () => {
        if(!x){
            <Redirect to='/login' />
            setHeader(<Header/>)
        }else{
            if(!x.roles.includes("customer")){
                history.push("/error");
            }
            setHeader(<SignedHeader/>)
        }
       
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
            console.log(result.data.data);
            
        }
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        let order = {
            // first_name:first_name,
            // last_name:last_name,
            email:email,
            order_type:"online",
            total_price:parseInt(calculation(data)),
            date: new Date().toLocaleDateString('en-CA'),
            address: address,
            state: state,
            city: city,
            postal_code: postal_code,
            mobile:parseInt(phone) ,
            customer:{
                customer_id: parseInt(x.id)
            }
        }
        console.log(order);
        
        //action="https://sandbox.payhere.lk/pay/checkout"
        CustomerService.addtheOrder(order).then((res) => {
            //console.log(res.data);
            setOrderId(res.data.data);
            addOrderItems(data, res.data.data);
        }).catch((err)=>{

        })

        //document.user_form.action = "https://sandbox.payhere.lk/pay/checkout";
    }

    const calculation = (res) => {
        let total = 0;
        res.map((x) => {
                total= total+ x.price;
            })
        return total;
    }

    const addOrderItems =  (items,oid) => {
        let id = [];
        items.map((x) => {
            id.push(x.id)
        })

        console.log(id);
        CustomerService.addOrderItems(id, oid).then((res) => {
            console.log(res.data.message);
        })

    }

    // handleButtonClicked() {
    //     var searchQuery = this.state.searchQuery;
    
    //     window.location.href = "https://www.payhere.lk/pay/checkout";
    //   }

    return(
        <>
        {header}
{ /* <div className="w-11/12 mt-8 mb-8 m */}
        <div className="w-8/12 mt-12 mb-8 ml-96">
            <p className="mb-0 ml-64 font-medium text-red-700">We don't save any of your payment information in our databases.</p>
            <p className="mb-2 font-medium text-red-700 ml-36">You may proceed with <span className="text-blue-700">PayHere</span> by clicking below link. Thank your for purchasing with GreenNest!</p>
            <div className=""><CheckoutAmount sum={calculation(data)}/></div>
            <div className="row">
            <div className="col-75">
                <div className="container bg-gray-500 bg-opacity-25 rounded-md">
                    <form id="validate" method="post" action="https://sandbox.payhere.lk/pay/checkout">
                        <div className="row">
                            <div className="col-50">
                                <div className="m-4 ml-0 text-lg font-bold text-maingreen">Payment Details</div>
                                
                                <input type="hidden" name="merchant_id" value="1218584" hidden />
                                <input type="hidden" name="return_url" value="http://localhost:3000/cart" />
                                <input type="hidden" name="cancel_url" value="http://localhost:3000/cart" />
                                <input type="hidden" name="notify_url" value="http://localhost:3000/cart" />
                                
                                <input type="hidden" name="order_id" value="ItemNo12345" />
                                <input type="hidden" name="items" value="Mango plant" />
                                <input type="hidden" name="currency" value="LKR" />
                                <input type="hidden" name="amount" value="700" /> 

                                {/* <label className="text-sm font-medium" for="fname"><FontAwesomeIcon icon={faUser} /> Full Name</label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="fname" name="fullname" placeholder="Hashan Kumarasinghe" required/> */}
                                <div class="row">
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="fname">First Name</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="fname" name="first_name" value={first_name} onChange={ e => setFname(e.target.value)} placeholder="Hashan" required/>
                                    </div>
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="lname">Last Name</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="lname" value={last_name} name="last_name" onChange={ e => setLname(e.target.value)} placeholder="Kumarasinghe" required/>
                                    </div>
                                </div>
                                <label className="text-sm font-medium" for="email">
                                    {/* <FontAwesomeIcon icon={faEnvelope} />  */}
                                    Email
                                </label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="email" name="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="hashankumarasinghe@gmail.com" required/>
                                <label className="text-sm font-medium" for="phone">
                                    {/* <FontAwesomeIcon icon={faCity} />  */}
                                    Contact Number
                                </label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="phone" name="phone" value={phone} onChange={ e => setPhone(e.target.value)} placeholder="0769719060" required/>
                                <label className="text-sm font-medium" for="adr">
                                    {/* <FontAwesomeIcon icon={faAddressCard} />  */}
                                    Address
                                </label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="adr" name="address" value={address} onChange={ e => setAddress(e.target.value)} placeholder="448/1, Mathawa Kohilegedara" required/>
                                <label className="text-sm font-medium" for="city">
                                    {/* <FontAwesomeIcon icon={faCity} />  */}
                                    City
                                </label>
                                <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="city" name="city" value={city} onChange={ e => setCity(e.target.value)} placeholder="Kurunegala" required/>
                                <input type="hidden" name="country" value="Sri Lanka" />

                                <div class="row">
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="state">State</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="state" name="state" value={state} onChange={ e => setState(e.target.value)}  placeholder="North Western"required/>
                                    </div>
                                    <div class="col-50">
                                        <label className="text-sm font-medium" for="pcode">Postal Code</label>
                                        <input className="w-full p-2 border border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen" type="text" id="pcode" name="postal_code" value={postal_code} onChange={ e => setPostal_code(e.target.value)}  placeholder="60028"required/>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-50">
                            <div className="justify-center mt-4 mb-6 ml-0 text-lg font-bold text-maingreen">Payment</div>
                                <label className="text-sm font-medium ml-36" for="fname">Accepted Cards</label>
                                <div class="icon-container flex justify-center space-x-4">
                                   
                                    <FaIcons.FaCcVisa className=""/>
                                    <FaIcons.FaCcAmex />
                                    <FaIcons.FaCcMastercard />
                                    <FaIcons.FaCcDiscover />
                                    
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
                            </div> */}
                         {/* <div className=""><CheckoutAmount sum={calculation(data)}/></div>    */}
                        </div>
    {/* <input type="hidden" name="merchant_id" value="1218584" />    
    <input type="hidden" name="return_url" value="http://localhost:3000/cart" />
    <input type="hidden" name="cancel_url" value="http://localhost:3000/cart" />
    <input type="hidden" name="notify_url" value="http://localhost:3000/cart" />  
    <br /><br />Item Details<br />
    <input type="text" name="order_id" value="ItemNo12345" />
    <input type="text" name="items" value="Door bell wireless" /><br />
    <input type="text" name="currency" value="LKR" />
    <input type="text" name="amount" value="1000" />  
    <br /><br />Customer Details<br />
    <input type="text" name="first_name" value="Saman" />
    <input type="text" name="last_name" value="Perera" /><br />
    <input type="text" name="email" value="samanp@gmail.com" />
    <input type="text" name="phone" value="0771234567" /><br />
    <input type="text" name="address" value="No.1, Galle Road" />
    <input type="text" name="city" value="Colombo" />
    <input type="hidden" name="country" value="Sri Lanka" /> <br /><br /> 
    <input type="submit" value="Buy Now" />   */}
                        <label>
                        <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                        </label>
                        <button className="justify-center p-4 px-4 py-3 mt-3 mb-2 ml-56 text-lg font-bold text-white rounded bg-maingreen hover:bg-hovergreen w-96" type="submit" >Continue to Checkout</button>
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
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Search from './components/Search';
import ModeratorSidebar from '../components/moderatorSidebar';
import api from "../../../axiosContact";
import {FaArrowAltCircleRight} from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderItemsPopup from "./OrderItemsPopup";

function Upcomingorders () {

    const [data, setdata] = useState([]);
    const [deliveryPersons, setdeliveryPersons] = useState([]);
    const [active,setActive] =useState("OnlinePayment");
    const [dp, setdp] = useState();
    const [orderId, setorderId] = useState();
    const [setPopup, setsetPopup] = useState(false);
    const [totalPrice, settotalPrice] = useState();
    const y = JSON.parse(localStorage.getItem('authorization'));
    var history = useHistory();

    useEffect(() => {
        checkValidate();
        getOnlinePayment();
        getDeliveryPersons();
    }, [])

    const checkValidate = async() => {
        const y = JSON.parse(localStorage.getItem('authorization'));
        if(!y){
            <Redirect to='/login' />
        }else{
            if(y.roles[0] == "admin" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
                history.push("/error");
            }  
        }
    }

    const viewOrderItems = async (order_id,total_price) => {
        setsetPopup(true);
        setorderId(order_id);
        settotalPrice(total_price);
    }

    const getOnlinePayment = async () => {
        setActive("OnlinePayment");
        api.get("/getOnlinePayments")
        .then((result) => {
            setdata(result.data);
        })
    }

    const getCashonDelivery = async () => {
        setActive("CashonDelivery");
        api.get("/getCashOnDelivery")
        .then((result) => {
            setdata(result.data);
        })
    }

    const getDeliveryPersons = async () => {
        api.get("/getDeliveryPersons")
        .then((result) => {
            setdeliveryPersons((result.data));
        })
    }

    const assignDPerson = async (order_id) => {
        api.get(`/assignDPerson/${order_id}/${dp}/${y.eid}`)
        .then((result) => {
            if(result.data === 1){
                toast('Successfully Assign Delivery Person to Order', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position: toast.POSITION.TOP_CENTER
                });
                if(active === "OnlinePayment"){
                    getOnlinePayment();
                }else{
                    getCashonDelivery();
                }
            }
        })
    }
    
    return ( 
        <div>
            <ModeratorSidebar/>
            <div className="flex justify-end pb-4 mt-8 mr-10">
                <div className="w-9/12 p-4 py-8 mx-4 bg-gray-500 bg-opacity-25 rounded">
                    <h4 className="text-3xl font-bold text-center text-maingreen">Upcoming Orders</h4> 
                    <div className="flex justify-end w-full mt-6 mb-6 mr-8">
                        <Search className="w-3/4"/>
                    </div>
                    <div className="pb-4 divide-x-2 divide-maingreen">
                        <button
                            className={
                                active === "OnlinePayment"
                                ? "justify-center w-1/2 h-12 text-xl font-bold border-opacity-0 text-green-800"
                                : "justify-center w-1/2 h-12 text-xl font-bold border-opacity-0"
                            }
                            onClick={()=> getOnlinePayment()}
                        >
                            Online Payment
                        </button>
                        <button
                            className={
                                active === "CashonDelivery"
                                ? "justify-center w-1/2 h-12 text-xl font-bold border-opacity-0 text-green-800"
                                : "justify-center w-1/2 h-12 text-xl font-bold border-opacity-0"
                            }
                            onClick={()=> getCashonDelivery()}
                            >
                                Cash On Delivery
                        </button>
                    </div>
                    <div className="grid items-center w-full px-3 py-2 pl-5 text-lg font-semibold text-left bg-gray-500 bg-opacity-25 border-b border-gray-400 rounded-md shadow text-gray-00 gap-x-5 md:grid-cols-5">
                        <div>Customer</div>
                        <div>Delivery Address</div>
                        <div>Mobile</div>
                        <div className="-ml-6">Delivery Persons</div>
                        <div></div>
                    </div>
                    {
                        data.length !== 0 ? (
                            data.map((order, index) => (
                                order.order_status === "Pending" ? (
                                <div key={index} className="grid items-center w-full px-3 py-2 pl-5 mt-3 text-lg text-left border-b border-gray-200 rounded-md shadow gap-x-5 bg-gray-50 md:grid-cols-5">
                                    <div>{order.customer.first_name} {order.customer.last_name}</div>
                                    <div>{order.address}, {order.city}</div>
                                    <div>0{order.mobile}</div>
                                    <div className="-ml-6">
                                        {
                                            deliveryPersons.length !== 0 ? (
                                                <select name="Deliverpersons"
                                                    onChange={(e) => {
                                                        setdp(e.target.value);
                                                    }}
                                                >
                                                {
                                                    deliveryPersons.map((dperson, index) => (
                                                        dperson.available === 0 ? (
                                                            <option className="py-10 text-lg" value={dperson.nic}>{dperson.first_name} {dperson.last_name}</option>
                                                        ) : null
                                                    ))
                                                }
                                                </select>
                                            ) : <h6>No Available Delivery Persons</h6>
                                        }
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700" onClick={() => viewOrderItems(order.order_id, order.total_price)}>Order Items</a>
                                        <FaArrowAltCircleRight className="text-3xl text-maingreen hover:text-hovergreen" onClick={() => assignDPerson(order.order_id)}/>
                                    </div>
                                </div>
                                ) : null
                            ))
                        ) : null
                    }
                </div>
            </div>
            { setPopup ? (
                <OrderItemsPopup canclePopup={() => setsetPopup(false)} order_id={orderId} total_price={totalPrice}/>
            ): null }
        </div>
     );
}
 
export default Upcomingorders;
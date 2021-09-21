import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import ModeratorSidebar from '../components/moderatorSidebar';
import api from "../../../axiosContact";
import OrderItemsPopup from "./OrderItemsPopup";

function Upcomingorders () {

    const [setPopup, setsetPopup] = useState(false);
    const [data, setdata] = useState([]);
    const [active,setActive] =useState("OnlinePayment");
    const [dp, setdp] = useState();
    const [orderId, setorderId] = useState();
    const [totalPrice, settotalPrice] = useState();

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
        api.get("/getCashonDelivery")
        .then((result) => {
            setdata(result.data);
        })
    }

    const findDPerson = async (nic) => {
        api.get(`/findDPerson/${nic}`)
        .then((result) => {
            setdp(result.data);
        })
    }
    
    useEffect(() => {
        getOnlinePayment();
    }, [])
    
    return ( 
        <div>
            <ModeratorSidebar/>
            <div className="flex justify-end pb-4 mt-8 mr-10">
                <div className="w-9/12 p-4 py-8 mx-4 bg-gray-500 bg-opacity-25 rounded">
                    <h4 className="text-3xl font-bold text-center text-maingreen">Ongoing Orders</h4> 
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
                                Cashon Delivery
                        </button>
                    </div>
                    <div className="grid items-center w-full px-3 py-2 pl-5 text-lg font-semibold text-left text-gray-800 bg-gray-500 bg-opacity-25 border-b border-gray-400 rounded-md shadow gap-x-5 md:grid-cols-5">
                        <div>Customer</div>
                        <div>Delivery Address</div>
                        <div>Mobile</div>
                        <div className="-ml-6">Delivery Persons</div>
                        <div></div>
                    </div>
                    {
                        data.length !== 0 ? (
                            data.map((order, index) => (
                                order.delivery_id !== "0" ? (
                                <div key={index} className="grid items-center w-full px-3 py-2 pl-5 mt-3 text-lg text-left border-b border-gray-200 rounded-md shadow gap-x-5 bg-gray-50 md:grid-cols-5">
                                    <div>{order.customer.first_name} {order.customer.last_name}</div>
                                    <div>{order.address}, {order.city}</div>
                                    <div>0{order.mobile}</div>
                                    <div></div>
                                    <div>
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-700" onClick={() => viewOrderItems(order.order_id, order.total_price)}>Order Items</a>
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
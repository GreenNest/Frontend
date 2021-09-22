import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SignedHeader from '../../../components/SignedHeader';
import CustomerService from '../../../services/CustomerService';
function OrderRequest () {
    const [data, setData] = useState([]);
    const x = JSON.parse(localStorage.getItem('authorization'));
    const [header, setHeader] = useState(0);
    const [message, setMessage] = useState('');
    const history = useHistory();
    console.log(x.id);
    
    useEffect(() => {
        getHeader();
        getOrderRequest(x.id);
    }, [])

    const getOrderRequest = async(cid) => {
        const x = await CustomerService.getCustomerOrderRequest(cid).then((res) => {
            if(res.data.data != null){
                console.log(res.data.data);
                setData(res.data.data)
            }
        }).catch((err) => {
            console.log(err.response);
            if(err.response.status == 401){
                history.push("/login");
            }
        })

    }

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            history.push("/login");
        }else{
          if(!x.roles.includes("customer")){
                history.push("/error");
            }
            setHeader(<SignedHeader/>)
        }
    }

    const deleteRequest = (oid) => {
        CustomerService.updateOrderRequest(oid).then((res) => {
            setMessage(res.data.message);
            setTimeout(() => {
                setMessage('');
            }, 3000);
            getOrderRequest(x.id);
        }).catch((err) => {
            console.log(err.response);
            // if(err.response.status == 401){
            //     history.push("/login");
            // }
        })

    }

    const acceptRequest = (oid) => {
        CustomerService.acceptOrderReqest(oid).then((res) => {
            setMessage(res.data.message);
            setTimeout(() => {
                setMessage('');
            },3000);
        }).catch((err) => {

        })

    }

    return (
        <>
        {header}
            <div className="flex items-start justify-end mt-10 mb-10 ml-10 mr-10">
                <div className="w-full px-10 py-10 bg-gray-500 bg-opacity-25 rounded sm:mx-10">                
                    <h4 className="text-3xl font-bold text-center text-maingreen">Order Requests</h4>
                    <p className="text-sm text-redcolor font-semibold flex justify-center items-center mt-2">{message}</p>
                    {
                        data.length !== 0 ? (
                            data.map((request, index) => (
                                <div key={index} className="w-auto p-3 mt-10 bg-white border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl">
                                    <div className="flex flex-col md:mx-5 gap-y-3">
                                        <div className="grid grid-cols-2">
                                            <div className="">
                                                <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Customer Name : </p>
                                                    <p className="font-medium text-medium">{request.customer.first_name} {request.customer.last_name}</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Email : </p>
                                                    <p className="font-medium text-medium">{request.customer.profile.email}</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Mobile Number : </p>
                                                    <p className="font-medium text-medium">0{request.customer.mobile}</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                {/* <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Product Category : </p>
                                                    <p className="font-medium text-medium">Fruits</p>
                                                </div> */}
                                                <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Product Name : </p>
                                                    <p className="font-medium text-medium">{request.productName}</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <p className="font-semibold text-green-900 text-medium">Quantity : </p>
                                                    <p className="font-medium text-medium">{request.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-medium">{request.description}</p>
                                        </div>
                                        {
                                            (request.moderatorDelete === 0 && request.customerDelete === 0 && request.moderatorAccept === 0 && request.customerAccept === 0) ? 
                                             (
                                                <div className="">
                                                    <p className="font-medium text-yellow-500">Pending your order request</p>
                                                </div>
                                             ) : null
                                        } 

                                        {
                                            (request.moderatorDelete === 1 && request.customerDelete === 0 && request.moderatorAccept === 0 && request.customerAccept === 0) ? (
                                                <div className="">
                                                    <p className="font-medium text-redcolor">Cannot proceed your order</p>
                                                </div>

                                            ) : null

                                        }
                                    
                                        
                                    </div>
                                    <div className="flex flex-wrap justify-between mt-5 md:mx-5">
                                    {
                                        (request.moderatorDelete === 1 && request.customerDelete === 0 && request.moderatorAccept === 0 && request.customerAccept === 0) ? (
                                            <div className="flex gap-x-3">
                                                <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={() => deleteRequest(request.id)}>Delete</button>
                                            </div>

                                        ) : null
                                    }

                                    {
                                        (request.moderatorDelete === 0 && request.customerDelete === 0 && request.moderatorAccept === 1 && request.customerAccept === 0) ? (
                                            <div className="flex gap-x-3">
                                                <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={() => acceptRequest(request.id)}>Accept</button>
                                                <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={() => deleteRequest(request.id)}>Delete</button>
                                            </div>
                                        ) : null
                                    }
                                        
                                    </div>
                                </div>
                            ))
                        ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                There are no New Order Requests.
                            </h4> 
                    }
                </div>  
            </div>
        </>
    );
}

export default OrderRequest;
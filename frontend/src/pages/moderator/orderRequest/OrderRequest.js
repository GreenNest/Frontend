import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModeratorSidebar from '../components/moderatorSidebar';
import api from '../../../axiosContact';
import RequestStockUpdate from './RequestStockUpdate';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderRequest () {

    const [setPopup, setsetPopup] = useState(false);
    const [productName, setproductName] = useState("");
    const [requestId, setrequestId] = useState();
    const [orderRequsts, setorderRequsts] = useState([]);
    const [error, seterror] = useState("");

    const accept = async (name,id) => {
        setsetPopup(true);
        setproductName(name);
        setrequestId(id);
    }

    const decline = async (id) => {
        if (window.confirm("Are you sure to decline this request?")) {
            api.get(`/declineRequest/${id}`)
            .then((result) => {
                if(result.data === 1){
                    toast('Successfully Decline the Request', {
                        autoClose: false,
                        closeOnClick: true,
                        progress: false,
                        position:toast.POSITION.TOP_CENTER
                    });
                    getOrderRequests();
                } else {
                    seterror("Something went wrong.");
                }
            });
        }
    }

    const gotIt = async (id) => {
        api.get(`/declineRequest/${id}`)
        .then((result) => {
            if(result.data === 1){
                getOrderRequests();
            }
        });
    }

    const orderRequestsGet =  async () => {
        const result = await api.get("/getOrderRequests");
        return result.data;
    }

    const getOrderRequests = async () => {
        const allRequests = await orderRequestsGet();
        if(allRequests) {
            setorderRequsts(allRequests);
        };
    }

    useEffect(() => {
        getOrderRequests();
    }, [])

    return (
        <>
            <ModeratorSidebar/>
            <div className="flex items-start justify-end mt-8 mb-10 ml-10">
                <div className="w-3/4 px-10 py-10 bg-gray-500 bg-opacity-25 rounded sm:mx-10">                
                    <h4 className="text-3xl font-bold text-center text-maingreen">Order Requests</h4>
                    {
                        orderRequsts.length !== 0 ? (
                            orderRequsts.map((request, index) => (
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
                                                    <p className="font-semibold text-green-900 text-medium">Quantity Requested : </p>
                                                    <p className="font-medium text-medium">{request.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-medium">{request.description}</p>
                                        </div>
                                    </div>

                                    {
                                        ((request.moderatorAccept === 1) && (request.customerAccept === 1)) 
                                        ? <div className="flex items-center justify-between md:mx-5">
                                            <div className="mt-5 text-xl font-bold text-green-900">Accepted by customer...</div>
                                            <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={() => gotIt(request.id)}>Ok</button>
                                          </div>
                                        : null
                                    }
                                    {
                                        ((request.moderatorAccept === 1) && (request.customerDelete === 1)) 
                                        ? <div className="flex items-center justify-between md:mx-5">
                                            <div className="mt-5 text-xl font-bold text-red-600">Decline by customer...</div>
                                            <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={() => gotIt(request.id)}>Ok</button>
                                          </div>
                                        : null
                                    }
                                    {
                                        ((request.moderatorAccept === 1) && (request.customerDelete === 0) && (request.customerAccept === 0))
                                        ? <div className="mt-5 ml-5 text-xl font-bold text-indigo-900">Pending Customer accept...</div>
                                        : null
                                    }
                                    {
                                        (request.moderatorAccept === 0) 
                                        ? <div className="flex flex-wrap justify-between mt-5 md:mx-5">
                                            <Link to={`/moderator/requestItemSuppliers/${request.productName}`} type="button" className="justify-center w-40 p-4 px-4 py-2 font-bold text-center text-white rounded bg-maingreen hover:bg-hovergreen">Find Suppliers</Link>
                                            <div className="flex gap-x-3">
                                                <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={() => accept(request.productName, request.id)}>Accept</button>
                                                <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={() => decline(request.id)}>Decline</button>
                                            </div>
                                            </div>
                                        : null
                                    }
                                </div>
                            ))
                        ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                There are no New Order Requests.
                            </h4> 
                    }
                </div>  
            </div>
            { setPopup ? (
                <RequestStockUpdate canclePopup={() => setsetPopup(false)} productName={productName} request_id={requestId} getOrderRequests={getOrderRequests} />
            ): null }
        </>
    );
}

export default OrderRequest;
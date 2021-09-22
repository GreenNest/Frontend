import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../axiosContact';

function RequestStockUpdate (props) {

    const [amount, setamount] = useState(0);
    const [error, seterror] = useState("");

    const updateStock = () => {
        api.put(`/updateStock/${props.productName}/${amount}`)
        .then((result) => {
            if(result.data === 1){
                api.put(`/checkedRequest/${props.request_id}`)
                .then((res) => {
                    if(res.data === 1){
                        toast('Successfully Update Stock', {
                            autoClose: false,
                            closeOnClick: true,
                            progress: false,
                            position:toast.POSITION.TOP_CENTER
                        });
                        props.canclePopup();
                        props.getOrderRequests();
                    } else {
                        seterror("Something went wrong.");
                    }
                });
            } else {
                seterror("Something went wrong.");
            }
        });
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
                <div className="relative flex flex-col w-full px-5 bg-gray-200 border-2 border-gray-400 rounded-lg shadow-inner outline-none border-opacity-1000 focus:outline-none">
                    <h2 className="mt-5 mb-5 text-2xl font-bold text-center text-maingreen">Update Stock</h2>
                    {
                        error.length !== 0 ? (
                            <div className="px-3 mb-2 ml-3 text-xl text-red-600">{error}</div>
                        ): null
                    }
                    <div className="relative flex-auto px-6 mb-5">
                        <div>
                            <label className="font-medium">Product Name</label>
                            <input
                                type='text'
                                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border-2 rounded-md outline-none text-primary hover:border-hovergreen focus:border-maingreen"
                                id='productCategory'
                                value={props.productName}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Update Quantity</label>
                            <input
                                type='text'
                                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border-2 rounded-md outline-none text-primary hover:border-hovergreen focus:border-maingreen"
                                id='product'
                                onChange = {(e) => setamount(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-5 gap-x-5">
                        <button className="justify-center p-4 px-4 py-2 font-bold text-white rounded w-36 bg-maingreen hover:bg-hovergreen" onClick={updateStock}>Submit</button>
                        <button className="justify-center p-4 px-4 py-2 font-bold text-white bg-red-600 rounded w-36 hover:bg-lightred" onClick={props.canclePopup}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestStockUpdate;
import React, { useState, useEffect } from 'react';
import api from '../../../axiosContact';

function RequestStockUpdate (props) {

    const [items, setitems] = useState([]);

    const getOrderItems = () => {
        api.get(`/getOrderItems/${props.order_id}`)
        .then((result) => {
            setitems(result.data);
        });
    }

    useEffect(() => {
        getOrderItems();
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
                <div className="relative flex flex-col w-full px-8 bg-gray-200 border-2 border-gray-400 rounded-lg shadow-inner outline-none border-opacity-1000 focus:outline-none">
                    <h2 className="mt-5 mb-5 text-2xl font-bold text-center text-maingreen">Order Items</h2>
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-400">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr className="divide-x divide-gray-400">
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Product Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    items.map((item, index) => (
                                        <tr key={index} className="divide-x divide-gray-400">
                                            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{item.product_name}</td>
                                            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{item.quantity}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="grid w-3/4 grid-cols-2 mt-5">
                        <h3 className="text-lg font-semibold text-green-800">Total Price : </h3>
                        <h4 className="text-lg font-medium">{props.total_price} LKR</h4>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button className="justify-end p-4 px-4 py-2 mb-5 font-bold text-white bg-red-600 rounded w-36 hover:bg-lightred" onClick={props.canclePopup}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestStockUpdate;
import { MdDeleteSweep } from 'react-icons/md';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../axiosContact';

const StockTable = (props) => {
    
    const save = (e) => {
        e.preventDefault();
        api.post("/add/productExcel", {
            name: props.product,
            details: props.des,
            price: props.unit_price,
            amount: props.quantity,
            isfeatured: props.featured,
            reorderLevel: props.reorder,
            category: props.category,
        }).then((result) => {
            if (result.data) {
                toast('Successfully add the product', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    return (
        <tr> 
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.category}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.product}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.unit_price}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.quantity}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.des}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.reorder}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">
                {/* <MdDeleteSweep className="w-6 h-6 ml-8 hover:text-red-700 mt-1.5 "/> */}
                <a href="#" className="font-semibold text-green-900 hover:text-green-800" onClick={save}>Save</a>
            </td>
        </tr>   
    ); 
}

export default StockTable;
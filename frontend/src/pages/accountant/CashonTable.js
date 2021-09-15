import * as FaIcons from "react-icons/fa";
import { useState } from 'react';
import React from 'react';
import StatusPopup from './StatusPopup';

function CashonTable(props){
    const [ShowStatusPopup,setShowStatusPopup] = useState(false);
    const[orderId, setOrderId] = useState(0);

    const toggleModel = (id) => {
        setShowStatusPopup(!ShowStatusPopup);
        setOrderId(id);
    }
    
    
        return (
            <tr> 
            { ShowStatusPopup ? (
                    <StatusPopup canclePopup={() => setShowStatusPopup(false)} id={orderId}/>
                ): null }   
                <td className="flex items-center justify-center w-full py-4 text-base text-gray-900">{props.order_id}</td>
                <td className="py-4 text-base text-center text-gray-900">{props.product_quantity}</td>
                <td className="py-4 text-base text-center text-gray-900">{props.total_cost}</td>
                <td className="py-4 text-base text-center text-gray-900">{props.date.substring(0,10)}</td>
                <td className="text-center">
                    <FaIcons.FaEdit className="w-full h-6 hover:text-green-700 mt-1.5 justify-center items-center cursor-pointer" onClick={() => toggleModel(props.order_id)}/> 
                </td>
        </tr>   
            
        );
    
}

export default CashonTable;
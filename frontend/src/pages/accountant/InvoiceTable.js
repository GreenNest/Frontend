import { useState } from 'react';
import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import StatusPopup from './StatusPopup';
import {FaArrowAltCircleRight} from "react-icons/fa";

function InvoiceTable(props){
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
                <td className="w-full py-4 text-base text-gray-900 flex justify-center items-center">{props.order_id}</td>
                <td className="text-center py-4 text-base text-gray-900">{props.product_quantity}</td>
                <td className="text-center py-4 text-base text-gray-900">{props.total_cost}</td>
                <td className="text-center py-4 text-base text-gray-900">{props.date.substring(0,10)}</td>
                <td className="text-center">
                    <FaArrowAltCircleRight className="w-full h-6 hover:text-green-700 mt-1.5 justify-center items-center cursor-pointer" onClick={() => toggleModel(props.order_id)}/> 
                </td>
        </tr>   
            
        );
    
}

export default InvoiceTable;

// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import { MdDeleteSweep } from 'react-icons/md';
// import {MdExpandMore} from 'react-icons/md';
// //import {BsViewStacked} from 'react-icons/md';
// import {FaArrowAltCircleRight} from "react-icons/fa";

// const InvoiceTable = (props) => {
    
    
//     return (
//         <tr>
       
            
//        <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.invoice_id}</td>

//        <td>
//             <FaArrowAltCircleRight className="w-6 h-6 ml-12 hover:text-green-900 mt-1.5 "/>
//         </td>
       
//         <td>
//             <MdDeleteSweep className="w-6 h-6 ml-12 hover:text-red-700 mt-1.5 "/>
//         </td>

        
        
        
//     </tr>   
        
//     );

// }

// export default InvoiceTable;
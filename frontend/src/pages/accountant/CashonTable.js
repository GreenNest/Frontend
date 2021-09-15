import * as FaIcons from "react-icons/fa";
import { useState } from 'react';
import StatusPopup from './StatusPopup';

const CashonTable = (props) => {
    const [ShowStatusPopup,setShowStatusPopup] = useState(false);
    
    
        return (
            <tr>
           
                
           <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.order_id}</td>
            <td className="px-24 py-4 text-base text-gray-900 whitespace-nowrap">{props.product_quantity}</td>
            <td className="px-16 py-4 text-base text-right text-gray-900 whitespace-nowrap">{props.total_cost}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.date}</td>
            <td className="px-64text-center">
                <FaIcons.FaEdit className="w-6 h-6 ml-8 hover:text-green-700 mt-1.5 " onClick={() =>setShowStatusPopup(true)}/> 
            </td>
            { ShowStatusPopup ? (
                <StatusPopup canclePopup={() => setShowStatusPopup(false)}/>
            ): null }

            
        </tr>   
            
        );
    
}

export default CashonTable;
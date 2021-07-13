import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import {MdExpandMore} from 'react-icons/md';
//import {BsViewStacked} from 'react-icons/md';
import {FaArrowAltCircleRight} from "react-icons/fa";

const InvoiceTable = (props) => {
    
    
    return (
        <tr>
       
            
       <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.invoice_id}</td>

       <td>
            <FaArrowAltCircleRight className="w-6 h-6 ml-12 hover:text-green-900 mt-1.5 "/>
        </td>
       
        <td>
            <MdDeleteSweep className="w-6 h-6 ml-12 hover:text-red-700 mt-1.5 "/>
        </td>

        
        
        
    </tr>   
        
    );

}

export default InvoiceTable;
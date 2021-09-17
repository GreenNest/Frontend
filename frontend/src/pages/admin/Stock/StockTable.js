import { MdDeleteSweep } from 'react-icons/md';

const StockTable = (props) => {
    
    return (
        <tr> 
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.category_id}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.productid}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.quantity}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.unit_price}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.date}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.time}</td>
            <td>
                <MdDeleteSweep className="w-6 h-6 ml-8 hover:text-red-700 mt-1.5 "/>
            </td>
    </tr>   
        
    ); 
}

export default StockTable;
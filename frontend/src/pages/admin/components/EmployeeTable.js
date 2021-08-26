import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';

const EmployeeTable = (props) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base font-medium text-gray-900">{props.name}</div>
                <div className="text-base text-gray-500">{props.email}</div>
            </td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.nic}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{props.address}</td>
            <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0{props.mobile}</td>
            <td>
                <Link to="/admin/editEmployee">
                    <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
                </Link>
            </td>
            <td>
                <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5"/>
            </td>
        </tr>                    
    );
}

export default EmployeeTable;
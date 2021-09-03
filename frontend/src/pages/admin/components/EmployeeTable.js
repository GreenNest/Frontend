import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import api from '../../../axiosContact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmployeeTable(props) {

    const deleteEmployee = async (id) => {
        const res = await api.put(`/deleteEmployee/${id}`);
        return res.data;
    };

    const employeeDelete = async (id) => {
        if (window.confirm("Are you sure to remove this employee?")) {
            const result = await deleteEmployee(id);
            if(result == 1){
                if(props.userState[0].active == "Moderators"){
                    props.getEmp(1)
                } else if(props.userState[0].active == "Accountants"){
                    props.getEmp(2)
                } else if(props.userState[0].active == "Delivery Persons"){  
                    props.getEmp(3)
                } else if(props.userState[0].active == "Workers"){  
                    props.getEmp(4)
                }
                toast('Successfully Delete an Account', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
            }
        }
    }

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
                <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5" onClick={() => employeeDelete(props.nic)}/>
            </td>
        </tr>                    
    );
}

export default EmployeeTable;
import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '#',
        icon: <MdIcons.MdDashboard className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-maingreen bg-hovergreen hover:text-white flex font-bold p-3 rounded w-48",
    }, 
    {
        title: 'View Category',
        path: '/admin/categoryView',
        icon: <GrIcons.GrView className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Add Item',
        path: '/admin/addItem',
        icon: <BiIcons.BiMessageAltAdd className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Update Stock',
        path: '/admin/updateStock',
        icon: <MdIcons.MdSystemUpdateAlt className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'View Supplier',
        path: '/admin/viewSupplier',
        icon: <IoIcons.IoIosPeople className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-red-400 bg-red-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Add Supplier',
        path: '/admin/addSupplier',
        icon: <MdIcons.MdPersonAdd className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-red-400 bg-red-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'View Employee',
        path: '/admin/viewEmployee',
        icon: <FaIcons.FaPeopleCarry className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-gray-400 bg-gray-300 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Add Employee',
        path: '/admin/addEmployee',
        icon: <TiIcons.TiUserAdd className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-gray-400 bg-gray-300 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Reports',
        path: '/admin/reports',
        icon: <HiIcons.HiDocumentReport className="w-5 h-5 mr-5 mt-0.5"/>,
        // style: "hover:bg-yellow-400 bg-yellow-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
]
import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FcIcons from "react-icons/fc";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/accountant/dashboard',
        icon: <MdIcons.MdDashboard className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-maingreen bg-hovergreen hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Notifications',
        path: '/accountant/notifications',
        icon: <BiIcons.BiNotification className="w-5 h-5 mr-3 mt-0.5"/>,
        //count: 5,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'CO Deliveries',
        path: '/accountant/coDeliveries',
        icon: <FaIcons.FaPeopleCarry className="w-5 h-5 mr-3 mt-0.5"/>,
        // count: <div className="ml-3 font-extrabold text-red-500"></div>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    }, 
    {
        title: 'Invoice History',
        path: '/accountant/invoiceHistory',
        icon: <GrIcons.GrCurrency className="w-5 h-5 mr-3 mt-0.5"/>,
        // count: 5,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Request a Leave',
        path: '/accountant/leaveRequests',
        icon: <MdIcons.MdDateRange className="w-5 h-5 mr-3 mt-0.5"/>,
        // count: 5,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Leave Statistics',
        path: '/accountant/leaveStats',
        icon: <AiIcons.AiOutlineBarChart className="w-5 h-5 mr-3 mt-0.5"/>,
        // count: 5,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
]
import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as FcIcons from "react-icons/fc";
import * as BiIcons from "react-icons/bi";
import * as TiIcons from "react-icons/ti";


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/moderator/dashboard',
        icon: <MdIcons.MdDashboard className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-maingreen bg-hovergreen hover:text-white flex font-bold p-3 rounded w-48",
    },
    // {
    //     title: 'Notifications',
    //     path: '/moderator/notifications',
    //     icon: <BiIcons.BiNotification className="w-5 h-5 mr-3 mt-0.5"/>,
    //     // count: <div className="ml-3 font-extrabold text-red-500"></div>,
    //     // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    // }, 
    {
        title: 'Upcoming Orders',
        path: '/moderator/upcomingOrders',
        icon: <Io5Icons.IoEnterSharp className="w-5 h-5 mr-3 mt-0.5"/>,
        // count: 5,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Ongoing Orders',
        path: '/moderator/ongoingOrders',
        icon: <Io5Icons.IoExitSharp className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    }, 
    {
        title: 'Order Requests',
        path: '/moderator/orderRequests',
        icon: <IoIcons.IoIosPeople className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-red-400 bg-red-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Order History',
        path: '/moderator/orderHistory',
        icon: <FaIcons.FaHistory className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Suppliers',
        path: '/moderator/supplierList',
        icon: <IoIcons.IoIosPeople className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-blue-400 bg-blue-200 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Delevery Persons',
        path: '/moderator/deliveryPersons',
        icon: <FaIcons.FaPeopleCarry className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-gray-400 bg-gray-300 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Request a Leave',
        path: '/moderator/leaveRequests',
        icon: <MdIcons.MdDateRange className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-gray-400 bg-gray-300 hover:text-white flex font-bold p-3 rounded w-48",
    },
    {
        title: 'Leave Statistics',
        path: '/moderator/leaveStats',
        icon: <AiIcons.AiOutlineBarChart className="w-5 h-5 mr-3 mt-0.5"/>,
        // style: "hover:bg-gray-400 bg-gray-300 hover:text-white flex font-bold p-3 rounded w-48",
    },
  

]
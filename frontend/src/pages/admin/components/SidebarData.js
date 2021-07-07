import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdDashboard className="w-5 h-5 mr-2"/>,
        // cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <HiIcons.HiDocumentReport className="w-5 h-5 mr-2"/>,
        // cName: 'nav-text',
    },
]
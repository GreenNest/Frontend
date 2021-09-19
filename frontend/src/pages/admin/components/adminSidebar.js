import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { AdminSidebarData } from './adminSidebarData';
import logo from '../../../assets/GreenNest.png';

function AdminSidebar() {
    const [adminsidebar, setAdminSidebar] = useState(true);

    const showAdminSidebar = () => setAdminSidebar(!adminsidebar);

    return (
        <>
        {/* <IconContext.Provider value={'maingreen'}> */}
            <div className="flex items-center justify-start h-12 bg-mainyellow">
                <Link to="#" className="ml-2 ">
                    <FaIcons.FaBars className="w-7 h-7 hover:text-maingreen" onClick={ showAdminSidebar } />
                </Link>
                <div className="ml-4 text-lg font-extrabold text-maingreen">Admin Overview</div>
            </div>
            <nav className={adminsidebar ? 'bg-mainyellow w-64 flex-col h-screen justify-center items-center p-5 absolute transition-duration: 850ms;' 
                                    : 'hidden bg-mainyellow w-36 flex-col h-screen justify-center items-center fixed p-5 transition-duration: 850ms;'}>
                <ul className="flex-col -mt-6 -ml-2">
                    {/* <li className="flex-col navbar-toggle">
                        <Link to='#' className="flex-col justify-end mt-1 mb-2 ml-0 menu-bars">
                            <AiIcons.AiFillCloseCircle className="float-right w-6 h-6"/>
                        </Link>
                    </li> */}
                    <img class="h-30 w-30 mr-80 ml-9" width="150" height="150"   src={logo} alt=""/>
                    {AdminSidebarData.map((item, index) => {
                        return (
                            <li key={index} className="flex flex-col p-3 ml-1 -mt-7" >
                                <NavLink to={item.path} exact activeClassName="activebtn">
                                    <button className="flex w-48 p-3 font-bold rounded outline-none hover:bg-maingreen hover:text-white">
                                        {item.icon}{item.title}
                                        <div className="ml-3 font-extrabold text-red-500">{item.count}</div>
                                    </button>
                                    {/* <div className="flex border">{item.count}</div> */}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        {/* </IconContext.Provider> */}
        </>
    )
}

export default AdminSidebar

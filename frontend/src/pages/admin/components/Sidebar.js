import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
// import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import logo from '../../../assets/GreenNest.png';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        {/* <IconContext.Provider value={'maingreen'}> */}
            <div className="bg-mainyellow flex justify-start items-center h-12">
                <Link to="#" className="ml-2 ">
                    <FaIcons.FaBars className="w-7 h-7 hover:text-maingreen" onClick={ showSidebar } />
                </Link>
            </div>
            <nav className={sidebar ? 'bg-mainyellow w-64 flex-col h-screen justify-center items-center p-5 absolute transition-duration: 850ms;' 
                                    : 'hidden bg-mainyellow w-36 flex-col h-screen justify-center items-center fixed p-5 transition-duration: 850ms;'}>
                <ul className="flex-col -ml-2 -mt-6">
                    {/* <li className="navbar-toggle flex-col">
                        <Link to='#' className="menu-bars flex-col ml-0 mt-1 mb-2 justify-end">
                            <AiIcons.AiFillCloseCircle className="w-6 h-6 float-right"/>
                        </Link>
                    </li> */}
                    <img class="h-30 w-30 mr-80 ml-9" width="150" height="150"   src={logo} alt=""/>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className="flex-col p-2 ml-3 -mt-3 flex" >
                                <Link to={item.path}>
                                    <button className="hover:bg-maingreen focus:bg-maingreen hover:text-white focus:text-white flex font-bold p-3 rounded w-48">{item.icon}{item.title}</button>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        {/* </IconContext.Provider> */}
        </>
    )
}

export default Sidebar

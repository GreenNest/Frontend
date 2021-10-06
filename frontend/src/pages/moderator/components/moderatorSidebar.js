import React, {useState} from 'react';
import { NavLink,  Link, useHistory } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { SidebarData } from './moderatorSidebarData';
import * as AiIcons from "react-icons/ai";
import logo from '../../../assets/GreenNest.png';

function ModeratorSidebar() {
    const [sidebar, setModeratorSidebar] = useState(true);
    const history = useHistory()

    const showModeratorSidebar = () => setModeratorSidebar(!sidebar);

    const logout = () => {
        localStorage.removeItem("authorization");
        history.push('/login');
    }

    return (
        <>
        {/* <IconContext.Provider value={'maingreen'}> */}
            <div className="flex items-center justify-start h-12 bg-mainyellow">
                <Link to="#" className="ml-2 ">
                    {/* <h1>Moderator Overview</h1> */}
                    <FaIcons.FaBars className="w-7 h-7 hover:text-maingreen" onClick={ showModeratorSidebar } />
                </Link>
                <div className="ml-4 text-lg font-extrabold text-maingreen">Moderator Overview</div>
            </div>
            <nav className={sidebar ? 'bg-mainyellow w-64 flex-col h-screen justify-center items-center p-5 absolute transition-duration: 850ms;' 
                                    : 'hidden bg-mainyellow w-36 flex-col h-screen justify-center items-center fixed p-5 transition-duration: 850ms;'}>
                <ul className="flex-col -ml-2 -mt-9">
                    {/* <li className="flex-col navbar-toggle">
                        <Link to='#' className="flex-col justify-end mt-1 mb-2 ml-0 menu-bars">
                            <AiIcons.AiFillCloseCircle className="float-right w-6 h-6"/>
                        </Link>
                    </li> */}
                    <img class="h-30 w-30 mr-80 ml-9" width="150" height="150"   src={logo} alt=""/>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className="flex flex-col p-2 ml-1 -mt-5" >
                                <NavLink to={item.path} exact activeClassName="activebtn">
                                    <button className="flex w-48 p-3 font-bold rounded outline-none hover:bg-maingreen focus:bg-maingreen hover:text-white focus:text-white">
                                        {item.icon}{item.title}
                                        {item.count}
                                    </button>
                                    {/* <div className="flex border">{item.count}</div> */}
                                </NavLink>
                            </li>

                        )
                    })}
                    <Link className="flex flex-col p-2 ml-1 -mt-3">
                        <button className="flex w-48 p-3 font-bold rounded outline-none hover:bg-maingreen focus:bg-maingreen hover:text-white focus:text-white" onClick={logout}>
                            <AiIcons.AiOutlineLogout className="w-5 h-5 mr-3 mt-0.5"/>Logout</button>
                    </Link>
                </ul>
            </nav>
        {/* </IconContext.Provider> */}
        </>
    )
}

export default ModeratorSidebar

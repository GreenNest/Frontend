import React, { Component } from 'react';
import xxx from '../assets/headerLogo.png';
import {FaAlignRight} from 'react-icons/fa'
import { NavLink, Link } from "react-router-dom";
import '../styles/nav.css'

class Header extends Component {
    state={
        isOpen:false
    };
    handleToggle=()=> {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <nav class="flex w-screen flex-col justify-between bg-mainyellow lg:flex-row sm:w-full">
            <div class="flex justify-between items-center">
              <img className="float-left ml-2 h-30 w-30" width="70" height="70"   src={xxx} alt=""/>
            {/* <nav class="flex w-full flex-col justify-between bg-mainyellow lg:flex-row sm:w-full ">
            <nav class="flex w-full flex-col justify-between bg-mainyellow lg:flex-row sm:w-full">
           <div class="flex justify-between items-center">
              <img class="h-30 w-30 mr-80 ml-2" width="70" height="70"   src={xxx} alt=""/> */}
              <div class="block lg:hidden">
                <button class="flex items-center justify-center px-3 py-2 mr-4 border rounded text-teal-lighter border-teal-light hover:text-maingreen hover:border-maingreen outline-none" onClick={this.handleToggle}>
                    <FaAlignRight class="h-3 w-3"/>
                </button>
               </div>
           </div>
           <div class={ this.state.isOpen ? "flex overflow-hidden justify-center items-center flex-col p-6 h-auto":" hidden lg:flex lg:items-center lg:justify-center"}>
                <NavLink to="/" exact activeClassName="active">
                    {/* Home */}
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-20">Home</li>
                </NavLink>
                <NavLink to="/shop" exact activeClassName="active">
                    {/* Shop */}
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-20">Shop</li>
                </NavLink>
                <NavLink to="/cart" exact activeClassName="active">
                    {/* Cart */}
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-20">Cart</li>
                </NavLink>
                <NavLink to="/profile/orders" exact activeClassName="active">
                   <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-20">My Orders</li>
                   {/* My Orders */}
                </NavLink>
                {/* <Link to="/login" class="block text-center w-32 px-4 -ml-3 py-2 text-20 leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-mainyellow hover:bg-maingreen lg:mr-5">
                    Sign In
                </Link> */}
                <Link to="/signup" class="block text-center w-32 px-4 ml-5 py-2 text-20 leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-mainyellow hover:bg-maingreen lg:mr-5">
                    Sign Up
                </Link>
           </div>
        </nav>
        
        );
    }
}

export default Header;





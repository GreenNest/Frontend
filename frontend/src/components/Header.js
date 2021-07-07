import React, { Component } from 'react';
import xxx from '../assets/GreenNest.png';
import {FaAlignRight} from 'react-icons/fa'
import { Link } from "react-router-dom";

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
              <img class="h-30 w-30 ml-2 float-left" width="70" height="70"   src={xxx} alt=""/>
              <div class="block lg:hidden">
                <button class="flex items-center justify-center px-3 py-2 mr-4 border rounded text-teal-lighter border-teal-light hover:text-maingreen hover:border-maingreen outline-none" onClick={this.handleToggle}>
                    <FaAlignRight class="h-3 w-3"/>
                </button>
               </div>
            </div>
            <div class={ this.state.isOpen ? "flex overflow-hidden justify-center items-center flex-col p-6 h-auto":" hidden lg:flex lg:items-center lg:justify-center"}>
                <Link to="/" class="block p-2 text-maingreen font-bold text-20 text-center lg:mr-10">
                    Home
                </Link>
                <Link to="/shop" class="block p-2 text-maingreen font-bold text-20 text-center lg:mr-10">
                    Shop
                </Link>
                <Link to="/cart" class="block p-2 text-maingreen font-bold text-20 text-center lg:mr-10">
                    Cart
                </Link>
                <Link to="/profile/orders" class="block p-2 text-maingreen font-bold text-20 text-center lg:mr-20">
                    My Orders
                </Link>
                <Link to="/login" class="block text-center w-32 px-4 ml-5 py-2 text-20 leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-mainyellow hover:bg-maingreen lg:mr-5">
                    Sign Up
                </Link>
           </div>
        </nav>
        
        );
    }
}

export default Header;





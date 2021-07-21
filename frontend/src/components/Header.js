import React, { Component } from 'react';
import { useEffect} from "react";
import xxx from '../assets/headerLogo.png';
import {FaAlignRight} from 'react-icons/fa'
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import '../styles/nav.css';
import CustomerService from '../services/CustomerService';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            // isLoggd: this.props.isLog,
            // logout:''
        };
    }
    // state={
    //     isOpen:false,
    //     isLoggd: this.props.isLog,
    // };

    handleToggle=()=> {
        this.setState({isOpen: !this.state.isOpen});
    }

    // clickme = () =>{
    //     //e.preventDefault();
    //     CustomerService.getCustomerDetails().then((response) => {
    //         console.log(response);
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }


    

    // logout = async (event) => {
    //     let loinState = {
    //         cipher: sessionStorage.getItem("token")
    //     }
    //     CustomerService.logoutUser(loinState).then((res) =>{
    //         console.log(res.data);
    //         if(res.data == 1){
    //             this.props.history.push("/");
    //             sessionStorage.removeItem("token");
    //         }
    //         // this.props.history.push("/cart");
            
    //     }
    //     )

        
 
    // }



    render() {
        return (
            <nav class="flex w-screen flex-col justify-between bg-mainyellow lg:flex-row sm:w-full">
            <div class="flex justify-between items-center">
              <img className="float-left ml-5 h-30 w-30" width="70" height="70"   src={xxx} alt=""/>
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
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-14">Home</li>
                </NavLink>
                <NavLink to="/shop" exact activeClassName="active">
                    {/* Shop */}
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-14">Shop</li>
                </NavLink>
                <NavLink to="/cart" exact activeClassName="active">
                    {/* Cart */}
                    <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-14">Cart</li>
                </NavLink>
                <NavLink to="/profile/orders" exact activeClassName="active">
                   <li className="block p-2 font-bold text-center list-none text-maingreen hover:text-hovergreen text-20 lg:mr-14">My Orders</li>
                   {/* My Orders */}
                </NavLink>
                <Link to="/login" class="block text-center w-32 px-3 -ml-3 py-2 text-20 leading-none border rounded text-maingreen border-maingreen lg:mr-5 font-semibold hover:text-secondarygreen">
                    Sign In
                </Link>
                <Link to="/signup" class="block text-center w-32 px-3 py-2 text-20 leading-none border rounded text-white border-maingreen bg-maingreen lg:mr-8 hover:bg-secondarygreen">
                    Sign Up
                </Link>

                
           </div>
        </nav>
        
        );
    }
    
}

export default withRouter(Header);





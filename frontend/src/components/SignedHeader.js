import React, { Component } from 'react';
import xxx from '../assets/GreenNest.png';
import {FaAlignRight} from 'react-icons/fa'
import { Link, withRouter } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let x =  JSON.parse(localStorage.getItem('authorization'));

class SignedHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            login:''
        };
    }
    componentDidMount(){

    }
    handleToggle=()=> {
        this.setState({isOpen: !this.state.isOpen});
    }
    logout = () =>{
        localStorage.removeItem("authorization");
        this.props.history.push('/login');
        // this.props.history.push({pathname: '/login',state: { message: "Log out successfully" }});
    }
    render() {
        return (
            <nav class="flex w-screen flex-col justify-between bg-mainyellow lg:flex-row sm:w-full">
            <div class="flex justify-between items-center">
              <img class="h-30 w-30 ml-2 float-left" width="70" height="70"   src={xxx} alt=""/>
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
                <Link to="/" class="block p-2 text-maingreen hover:text-hovergreen font-bold text-20 text-center lg:mr-10">
                    Home
                </Link>
                <Link to="/shop" class="block p-2 text-maingreen hover:text-hovergreen font-bold text-20 text-center lg:mr-10">
                    Shop
                </Link>
                <Link to="/cart" class="block p-2 text-maingreen hover:text-hovergreen font-bold text-20 text-center lg:mr-10">
                    Cart
                </Link>
                <Link to="/profile/orders" class="block p-2 text-maingreen hover:text-hovergreen font-bold text-20 text-center lg:mr-20">
                    My Orders
                </Link>
                <Link to="/login" class="block text-center w-36 px-4 ml-4 py-2 text-20 leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-mainyellow hover:bg-maingreen lg:mr-5">
                    <FontAwesomeIcon icon={faUser} /> {x.name}
                </Link>
                <button onClick={this.logout} class="block p-2 text-maingreen hover:text-hovergreen font-bold text-20 text-center lg:mr-20 outline-none">
                    log out
                </button>
           </div>
        </nav>
        
        );
    }
}

export default withRouter(SignedHeader);





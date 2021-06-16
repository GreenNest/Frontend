import React, { Component } from 'react';
import xxx from '../assets/GreenNest.png';
import {FaAlignRight} from 'react-icons/fa'

class Header extends Component {
    state={
        isOpen:false
    };
    handleToggle=()=> {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        return (
            <nav class="flex w-full flex-col justify-between bg-mainyellow lg:flex-row">
           <div class="flex justify-between items-center">
              <img class="h-30 w-30 mr-80 ml-2" width="70" height="70"   src={xxx} alt=""/>
              <div class="block lg:hidden">
                <button class="flex items-center justify-center px-3 py-2 mr-4 border rounded text-teal-lighter border-teal-light hover:text-maingreen hover:border-maingreen" onClick={this.handleToggle}>
                    <FaAlignRight class="h-3 w-3"/>
                </button>
               </div>
           </div>
           <div class={ this.state.isOpen ? "flex overflow-hidden justify-center items-center flex-col p-6 h-auto":" hidden lg:flex lg:items-center lg:justify-center"}>
                <a href="#" class="block p-2 text-maingreen font-bold text-center lg:mr-10">
                    Home
                </a>
                <a href="#" class="block p-2 text-maingreen font-bold text-center lg:mr-10">
                    Shop
                </a>
                <a href="#" class="block p-2 text-maingreen font-bold text-center lg:mr-10">
                    Cart
                </a>
                <a href="#" class="block p-2 text-maingreen font-bold text-center lg:mr-20">
                    Abot Us
                </a>
                <a href="#" class="block text-center w-32 px-4 py-2  leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-mainyellow hover:bg-maingreen lg:mr-5">
                    Register
                </a>
           </div>
        </nav>
        // <nav class="flex items-center flex-row justify-between flex-wrap bg-mainyellow">
        //     <div class="flex items-center flex-no-shrink mr-6">
        //         <img class="h-30 w-30 mr-80 ml-2" width="70" height="70"  src={xxx} alt=""/>
        //     </div>
        //     <div class="block lg:hidden">
        //         <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        //             <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        //         </button>
        //     </div>
        //     <div class="w-full flex bg-lightgreen flex-row justify-end items-end lg:flex lg:items-center lg:flex-col lg:justify-center lg:w-auto" height="70">
                
        //             <a href="#" class="block mt-3 lg:inline-block lg:mt-0 text-lg text-maingreen font-bold hover:text-white mr-16">
        //                 Home
        //             </a>
        //             <a href="#" class="block mt-3 lg:inline-block lg:mt-0 text-lg text-maingreen font-bold hover:text-white mr-16">
        //                 Shop
        //             </a>
        //             <a href="#" class="block mt-3 lg:inline-block lg:mt-0 text-lg text-maingreen font-bold hover:text-white mr-16">
        //                 Cart
        //             </a>
        //             <a href="" class=" block mt-3 lg:inline-block lg:mt-0 text-lg  text-maingreen font-bold hover:text-lightgreen mr-40 ">
        //                 About Us
        //             </a>
        //             <a href="#" class="inline-block text-sm px-4 py-2 mr-10 lg:inline-block leading-none border rounded text-maingreen border-maingreen hover:border-transparent hover:text-white hover:bg-maingreen mt-4 lg:mt-0">
        //                 Register
        //             </a>
               
        //    </div>
        // </nav>
        );
    }
}

export default Header;





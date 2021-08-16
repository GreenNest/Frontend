import React, { Component } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {FaClipboardList, FaClipboardCheck} from 'react-icons/fa';
import AdminSidebar from '../components/adminSidebar';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";


class AccDashboard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <AdminSidebar/>
            <div className="-mt-6 grid-container">
                {/* <div class="bg-maingreen h-screen"></div> */}
                <div className="-ml-4 main-area">
                    <div class="flex flex-col w-full h-full p-7 justify-between lg:container lg:p-12">
                       <div class="grid h-1/5 w-full grid-cols-3 lg:gap-10 md:gap-5 gap-4">
                            <div class=" w-full flex lg:flex-row flex-col justify-center items-center rounded-sm shadow-lg border-solid border-2 p-3">
                                <FaClipboardList class="text-30 text-maingreen"></FaClipboardList>
                                <div class="text-20 font-bold text-center">Today Orders</div>
                                <span class="text-30 text-redcolor ml-3 lg:ml-8 md:ml-3">20</span>
                            </div>
                            <div class=" w-full flex flex-col lg:flex-row justify-center items-center rounded-sm shadow-lg border-solid border-2 p-3">
                                <FaClipboardCheck class="text-30 text-maingreen"></FaClipboardCheck>
                                <div class="text-20 font-bold text-center">Upcomming Orders</div>
                                <span class="text-30 text-redcolor ml-3 lg:ml-8 md:ml-3">5</span>
                            </div>
                            <div class=" w-full flex flex-col lg:flex-row justify-center items-center rounded-sm shadow-lg border-solid border-2 p-3">
                                <FaClipboardCheck class="text-30 text-maingreen"></FaClipboardCheck>
                                <div class="text-20 font-bold text-center">Confirmed Orders</div>
                                <span class="text-30 text-redcolor ml-3 lg:ml-8 md:ml-3">4</span>
                            </div>
                       </div>
                       <div class="grid h-5/6 w-full grid-cols-2 mt-8 lg:gap-16 md:gap-10 gap-5">
                            <div class="w-full h-full p-1 rounded-md shadow-lg border-solid border-2"><BarChart/></div>
                            <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2 justify-center items-center flex" ><PieChart/></div>
                       </div>
                    </div>
                    
                </div>
            </div>
            </>
        );
    }
}

export default AccDashboard;

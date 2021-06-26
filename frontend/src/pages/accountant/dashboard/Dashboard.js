import React, { Component } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {FaClipboardList, FaClipboardCheck} from 'react-icons/fa'

class Dashboard extends Component {
    render() {
        return (
            <div className="grid-container">
                <div class="bg-maingreen h-screen"></div>
                <div className="main-area">
                    <div class="flex flex-col w-full h-full p-14 justify-between lg:container">
                       <div class="grid h-1/5 w-full grid-cols-3 lg:gap-16 md:gap-10 gap-5">
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-2">
                                <FaClipboardList class="text-30 text-secondarygreen"></FaClipboardList>
                                <div class="text-20 font-bold p-5">Today Orders</div>
                                <span class="text-30 text-redcolor ml-8">20</span>
                            </div>
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-2">
                                <FaClipboardCheck class="text-30 text-secondarygreen"></FaClipboardCheck>
                                <div class="text-20 font-bold p-4">Upcomming Orders</div>
                                <span class="text-30 text-redcolor ml-8">5</span>
                            </div>
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-2">
                                <FaClipboardCheck class="text-30 text-secondarygreen"></FaClipboardCheck>
                                <div class="text-20 font-bold p-4">Confirm Orders</div>
                                <span class="text-30 text-redcolor ml-8">4</span>
                            </div>
                       </div>
                       <div class="grid h-5/6 w-full grid-cols-2 mt-8 lg:gap-16 md:gap-10 gap-5">
                            <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2"><BarChart/></div>
                            <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2 justify-center items-center flex" ><PieChart/></div>
                       </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;

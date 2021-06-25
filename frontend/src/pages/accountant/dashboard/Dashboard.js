import React, { Component } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

class Dashboard extends Component {
    render() {
        return (
            <div className="grid-container">
                <div class="bg-maingreen h-screen"></div>
                <div className="main-area">
                    <div class="flex flex-col w-full h-full p-14">
                       <div class="grid h-2/5 gap-16 w-full grid-cols-3">
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-maingreen border-2">1</div>
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-secondarygreen border-2">2</div>
                            <div class=" w-full flex flex-row justify-center items-center rounded-sm shadow-lg border-solid border-lightgreen border-2">3</div>
                       </div>
                       <div class="grid h-5/6 gap-16 w-full grid-cols-2 ">
                            <div class="w-full h-full p-7 bg-mainyellow mt-9"><BarChart/></div>
                            <div class="w-full h-full p-7 bg-mainyellow mt-9"><LineChart/></div>
                       </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;

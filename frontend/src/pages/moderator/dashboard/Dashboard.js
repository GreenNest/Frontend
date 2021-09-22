import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import {FaClipboardList, FaClipboardCheck} from 'react-icons/fa';
import ModeratorSidebar from '../components/moderatorSidebar';

function AccDashboard () {
    
    var history = useHistory();

    useEffect(() => {
        checkValidate();
    }, [])

    const checkValidate = async() => {
        const y = JSON.parse(localStorage.getItem('authorization')); 
        if(!y){
            <Redirect to='/login' />
        }else{
            if(y.roles[0] == "admin" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
                history.push("/error");
            }  
        }
    }
    
    return (
        <>
        <ModeratorSidebar/>
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

export default AccDashboard;

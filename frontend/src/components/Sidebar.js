import React from 'react';
import xxx from '../assets/GreenNest.png';
import {FaAngleDoubleLeft } from 'react-icons/fa';


function Sidebar() {
    return (
        <div class="grid h-full grid-cols-sidebar-colums grid-rows-sidebar-rows w-full">
            <div class="bg-maingreen h-screen transition-all p-6">
                <div class="flex justify-between items-center flex-row">
                    <div class="font-bold text-20 text-mainyellow">Green Nest</div>
                    <button>
                        <FaAngleDoubleLeft class="text-mainyellow text-20" />
                    </button>
                </div>
                <div class="mt-9">
                  <div class="text-20 p-3 mb-3 rounded bg-secondarygreen text-mainyellow">Admin Dashboard</div>
                  <div class="text-sm p-3 text-mainyellow mb-2">Stock Management</div>
                  <div class="text-sm p-3 text-mainyellow mb-2">Suppliers</div>
                  <div class="text-sm p-3 text-mainyellow mb-2">View Report</div>
                  <div class="text-sm p-3 text-mainyellow mb-2">Notification</div>
                  <div class="text-sm p-3 text-mainyellow mb-2">Employee Management</div>
                  <div class="text-20 p-3 text-redcolor mb-0 font-bold mt-14">Log Out</div>
                
                </div>
            </div>
        </div>
    )
}

export default Sidebar



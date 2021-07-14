import React, { Component } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import AdminSidebar from '../components/adminSidebar';

import sales_report from '../../../assets/reports/sales_reports.jpg';

class Reports extends Component {
    render() {
        return (

            <div>
            <AdminSidebar />
            <div class="relative p-2 ml-72 z-50 mt-10 mb-20 w-9/12 bg-white shadow-xl">
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Category
                        </label>

                        <select class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3">

                            <option>Category 1</option>
                            <option>Category 2</option>
                            <option>Category 3</option>
                            <option>Category 4</option>
                            <option>Category 5</option>
                            <option>Category 6</option>
                            
                        </select>
                    </div>

                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Time period (Up To)
                        </label>

                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" />

                    </div>

                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Time period (Now)
                        </label>

                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" />

                    </div>

                    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Product Name
                        </label>

                        <select class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3">

                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                            <option>Product 4</option>
                            <option>Product 5</option>
                            <option>Product 6</option>
                            
                        </select>
                    </div>

                    

                </div>

                


                <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2"><BarChart/></div>


            </div>
            </div>
            
        );
    }
}

export default Reports;
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import BarChart from './components/BarChart';
import AdminSidebar from '../components/adminSidebar';
import Reportpdf from './Reportpdf';
import api from "../../../axiosContact";

function Reports () {
    
    var history = useHistory();
    const [allProducts, setallProducts] = useState([]);
    const [from, setfrom] = useState();
    const [to, setto] = useState();
    const [productName, setproductName] = useState("");
    const [report, setreport] = useState([]);

    useEffect(() => {
        // checkValidate();
        getProducts();
        getReport();
    }, [productName, from, to])

    // const checkValidate = async() => {
    //     const y = JSON.parse(localStorage.getItem('authorization')); 
    //     if(!y){
    //         <Redirect to='/login' />
    //     }else{
    //         if(y.roles[0] == "moderator" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
    //             history.push("/error");
    //         }
            
    //     }
    // }

    const getProducts = async () => {
        api.get("/get/products")
        .then((result) => {
            setallProducts(result.data);
        })
    }

    const getReport = async () => {
        api.get(`/getReport/${productName}/${from}/${to}`)
        .then((result) => {
            setreport(result.data);
        })
    }

    return (
        <div>
            {
                console.log(from)
            }
            <AdminSidebar />
            <div class="p-2 ml-64 z-50 mt-10 bg-white flex flex-col items-center">
                <div class="flex flex-raw justify-between w-3/4 mb-5">
                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-700 text-lg font-bold mb-2">
                            Product Name
                        </label>
                        <select 
                            class="appearance-none block w-full bg-gray-200 border rounded shadow focus:outline-none focus:shadow-outline focus:shadow-outline  focus:bg-white focus:border-black py-3 px-4 mb-3"
                            onChange={(e) => {
                                setproductName(e.target.value);
                            }}
                        >
                            {
                                allProducts.map((product, index) => (
                                    <option value={product.name}>{product.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div class="w-full px-3">
                        <label class="block tracking-wide text-gray-700 text-lg font-bold mb-2">
                            Time Period (From)
                        </label>
                        <input 
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date"
                            onChange={(e) => {
                                setfrom(e.target.value);
                            }}
                        />
                    </div>

                    <div class="w-full px-3">
                        <label class="blocktracking-wide text-gray-700 text-lg font-bold mb-2">
                            Time Period (Up To)
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date"
                            onChange={(e) => {
                                setto(e.target.value);
                            }}
                        />
                    </div>
                </div>

                {/* <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2">
                    <BarChart/>
                </div> */}

            <div className="flex items-center justify-center w-3/4 bg-gray-500 bg-opacity-25 rounded">
                <div className="flex flex-col w-10/12 mt-5 mb-5">
                    <h4 className="mb-5 text-3xl font-bold text-center text-maingreen">{productName} Sales Report</h4>
                    {/* <div className="">
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Product Name : </p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Stock Quantity : </p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Time Duration : </p>
                            <p className="font-medium text-medium"></p>
                        </div>
                    </div> */}

                    <div className="w-full mt-5 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Customer</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Address</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Mobile</th>
                                    <th className="w-10 px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Item Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    report.length !== 0 ? (
                                        report.map((rep, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{rep.first_name} {rep.last_name}</td>
                                                <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{rep.address}, {rep.city}</td>
                                                <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{rep.mobile}</td>
                                                <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">{rep.quantity}</td>
                                            </tr>
                                        ))
                                    ): null
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Reports;
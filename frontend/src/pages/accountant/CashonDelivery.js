import React,{Component} from 'react';
import { useState } from 'react';
import CashonTable from './CashonTable';
import StatusPopup from './StatusPopup';
import AccountantSidebar from './dashboard/components/accountantSidebar';



const CashonDelivery = () => {



    const [ShowStatusPopup,setShowStatusPopup] = useState(false);
    
   
        
        


    return (
        <div>
        <AccountantSidebar/>
            <div className="flex justify-end pb-4 mt-8 mr-10">
                <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                

                <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Cash On Delivery Details</h1>
                <div className="flex flex-col mt-2 sm:mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">ORDoice ID</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Prduct Quantity</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Total Cost (RS)</th>
                                    <th className="px-10 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Date</th>
                                    
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700" >Edit</th>



                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                <CashonTable order_id="ORD 1007"  product_quantity='5' total_cost='1200' date='2021/05/23'   />
                                <CashonTable order_id="ORD 1009"  product_quantity='2' total_cost='600' date='2021/05/30'   />
                                <CashonTable order_id="ORD 1017"  product_quantity='3' total_cost='680' date='2021/06/01'   />
                                <CashonTable order_id="ORD 1025"  product_quantity='4' total_cost='1000' date='2021/06/06'   />
                                <CashonTable order_id="ORD 1028"  product_quantity='20' total_cost='8500' date='2021/06/12'   />
                                <CashonTable order_id="ORD 1030"  product_quantity='15' total_cost='6820' date='2021/06/21'   />
                                <CashonTable order_id="ORD 1037"  product_quantity='6' total_cost='990' date='2021/06/23'   />
                                

                                

                                

                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


                </div>

            </div>
            { ShowStatusPopup ? (
                <StatusPopup canclePopup={() => setShowStatusPopup(false)}/>
            ): null }

        </div>

            
        
    );



}



export default CashonDelivery;
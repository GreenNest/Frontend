import React,{useState, useEffect} from 'react';
import InvoiceTable from './InvoiceTable';
import StatusPopup from './StatusPopup';
import AccountantSidebar from './dashboard/components/accountantSidebar';
import CustomerService from '../../services/CustomerService';



function InvoiceHistory() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async()=> {
        const x = await CustomerService.getAllCoOrders().then((result) => {
            console.log(result.data.data);
            if(result.data.data != null){
                setData(result.data.data);
                console.log(data);
            }
        }).catch((err) => {
            console.log(err.response);
            // setMessage(err.response.data.message);
        })
    }

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
                                    <th className="py-3 w-1/5 text-lg font-semibold tracking-wider text-gray-700">ORDoice ID</th>
                                    <th className="py-3 w-1/5 text-lg font-semibold tracking-wider text-gray-700">Prduct Quantity</th>
                                    <th className="py-3 w-1/5 text-lg font-semibold tracking-wider text-gray-700">Total Cost (RS)</th>
                                    <th className="py-3 w-1/5 text-lg font-semibold tracking-wider text-gray-700">Date</th>
                                    
                                    <th className="py-3 w-1/5 text-lg font-semibold tracking-wider  text-gray-700" >Send Invoice</th>



                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                            {data.length !=0 ? data.map((item, id) => 
                                <InvoiceTable order_id={item.id} product_quantity={item.items} total_cost={item.cost} date={item.date} key={id} />
                            ) : <tr className="flex justify-center items-center text-lg overflow-hidden">
                                 <td>Empty</td>
                            </tr>}

                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


                </div>

            </div>

        </div>

            
        
    );



}



export default InvoiceHistory;

// import React, {Component} from 'react';
// import { useState } from 'react';

// import InvoiceTable from './InvoiceTable';
// import AccountantSidebar from './dashboard/components/accountantSidebar';





// class InvoiceHistory extends Component{
//     render(){
//     return (
//         <div>
//         <AccountantSidebar/>
//             <div className="flex justify-end pb-4 mt-8 mr-10">
//                 <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                

//                 <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Invoice History</h1>
//                 <div className="flex flex-col mt-6 sm:mx-10">
//                 <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                 <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                     <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
//                         <table className="min-w-full divide-y divide-gray-300">
//                             <thead className="bg-gray-500 bg-opacity-25">
//                                 <tr>
//                                     <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Invoice ID</th>
//                                     <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">View More</th>
                         
//                                     <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Delete</th>



//                                 </tr>
//                             </thead>
//                             <tbody className="bg-white divide-y divide-gray-200 ">
//                                 <InvoiceTable invoice_id="INV 1007" />
//                                 <InvoiceTable invoice_id="INV 1009" />
//                                 <InvoiceTable invoice_id="INV 1012" />
//                                 <InvoiceTable invoice_id="INV 1013" />
//                                 <InvoiceTable invoice_id="INV 1017" />
//                                 <InvoiceTable invoice_id="INV 1015" />

                                

                                

                                

//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>


//                 </div>

//             </div>
//         </div>
//     );
//     }

//     }



//  export default InvoiceHistory;

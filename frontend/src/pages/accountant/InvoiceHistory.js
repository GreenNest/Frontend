import React from 'react';
import { useState } from 'react';


const InvoiceHistory = ()=>{

    


    const [orders, setOrders] = useState([
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },
        { invoiceid: "CT1001",  viewmore:"View", delete:"Delete" },

    ])


    return (
        <div class="relative items-center p-3 ml-40 z-50 mt-20 mb-20 w-2/4 bg-white shadow-card ">

            <h1 class="text-4xl text-center mt-6 font-bold font-sans"> Invoice History </h1>

            <div class="grid grid-cols-3 gap-0 mt-10 bg-maingreen p-6 content-center">
                <div class="ml-12">Invoice ID</div>
                <div class="ml-12">View More</div>
                <div class="ml-12">Delete</div>
                




            </div>

            <div>
                {orders.map((order) => (
                    <div class="flex space-x-36 p-6 mt-10  text-lg bg-gray-200 w-full">
                        <h3 class="ml-16">{order.invoiceid}</h3>
                        

                        <button>
                        <h3 class="px-3 py-1 ml-5 font-bold text-mainyellow bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">{order.viewmore}</h3>
                        </button>

                        <button>
                        <h3 class="px-3 py-1 ml-5 font-bold text-mainyellow bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">{order.delete}</h3>
                        </button>


                    </div>
                ))}
            </div>

           

        </div>
    );

}


 export default InvoiceHistory;

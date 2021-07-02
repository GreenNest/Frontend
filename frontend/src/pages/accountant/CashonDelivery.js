import React from 'react';
import { useState } from 'react';
import StatusPopup from './StatusPopup';


const CashonDelivery = () => {

    const [ShowStatusPopup,setShowStatusPopup] = useState(false);


    const [stocks, setStock] = useState([
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },
        { orderid: "ORD1101", productname: "Mango", quantity: 15, totalcost: "100.00", date: '2021/06/20', edit: "Edit" },

    ])

    return (
        <div class="relative p-3 ml-36 z-50 mt-20 mb-20 w-10/12 bg-white shadow-xl ">

            <h1 class="text-4xl text-center mt-6 font-bold font-sans"> Cash On Delivery Details </h1>

            <div class="grid grid-cols-6 gap-0 mt-10 bg-maingreen p-6 content-center">
                <div class="ml-12">Order ID</div>
                <div class="ml-12">Product ID</div>
                <div class="ml-12">Quantity</div>
                <div class="ml-8">Total Cost</div>
                <div class="ml-12">Date</div>
                <div class="ml-12">Edit Status</div>




            </div>

            <div>
                {stocks.map((stock) => (
                    <div class="flex space-x-36 p-6 mt-10  text-lg bg-gray-100 w-full">
                        <h3 class="ml-16">{stock.orderid}</h3>
                        <h3 class="ml-14">{stock.productname}</h3>
                        <h3 class="ml-14">{stock.quantity}</h3>
                        <h3 class="ml-14">{stock.totalcost}</h3>
                        <h3 class="ml-14">{stock.date}</h3>

                        
                        <button class="px-3 py-1 ml-5 font-bold text-mainyellow bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline" onClick={() => setShowStatusPopup(true)}>{stock.edit}</button>
                       

                    </div>
                ))}
            </div>

            { ShowStatusPopup ? (
                <StatusPopup canclePopup={() => setShowStatusPopup(false)}/>
            ): null }

        </div>
    );

}




export default CashonDelivery;
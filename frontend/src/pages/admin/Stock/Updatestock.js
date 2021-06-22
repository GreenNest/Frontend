import React from 'react';
import {useState} from 'react';


const Updatestock =() => {

    const [stocks, setStock] = useState([
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        {categoryid:"CT1001" , productid:1100 , quantity:15 , unitprice:"100.00"  , date:'2021/06/20' , delete:"Delete"},
        
    ])
    
        return (
            <div class="relative p-3 ml-36 z-50 mt-20 mb-20 w-10/12 bg-white shadow-card ">
                <div class="flex items-center mt-4">
                    <button class="px-14 py-4 font-bold text-white text-xl bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline" type="submit">
                       Add 
                    </button>
                    
                </div>
                <h1 class="text-4xl text-center mt-6 font-bold font-sans"> Update Stock</h1>

                <div class="grid grid-cols-6 gap-0 mt-10 bg-maingreen p-6 content-center">
                    <div class="ml-12">Category ID</div>
                    <div class="ml-12">Product ID</div>
                    <div class="ml-12">Quantity</div>
                    <div class="ml-8">Unit Price</div>
                    <div class="ml-12">Date</div>
                    <div class="ml-12">Update</div>
                    



                </div>

                <div>
                    {stocks.map((stock) => (
                        <div class="flex space-x-36 p-6 mt-10  text-lg bg-gray-200 w-full">
                            <h3 class="ml-16">{stock.categoryid}</h3>
                            <h3 class="ml-14">{stock.productid}</h3>
                            <h3 class="ml-14">{stock.quantity}</h3>
                            <h3 class="ml-14">{stock.unitprice}</h3>
                            <h3 class="ml-14">{stock.date}</h3>
                            
                            <h3 class="px-3 py-1 ml-5 font-bold text-mainyellow bg-blue-800 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">{stock.delete}</h3>
                           


                        </div>
                    ))}
                </div>

                
                
            </div>
        );
    
}

export default Updatestock;
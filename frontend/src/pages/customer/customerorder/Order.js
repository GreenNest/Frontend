import React from 'react';
import {useState} from 'react';
import Complaintmodel from './Complaintmodel';
import Ratemodel from './Ratemodel';

 const Order = () => {
    const[order]= useState(
        [
            {Item:"orcid", price:200, Qty:3, subtotal:600, id:1 } ,
            {Item:"orcid", price:200, Qty:3, subtotal:600, id:2 } ,
            {Item:"orcid", price:200, Qty:3, subtotal:600 , id:3 } ,
            {Item:"orcid", price:200, Qty:3, subtotal:600 , id:4 } 
        ] 
      );

      const [model1,setModel1] =useState(false);
      const [model2,setModel2] =useState(false);

      const toggleModel = () => {
        setModel1(!model1)
      }

      const togglecomplain = () => {
        setModel2(!model2)
      }
  
    return (
       
       <div className="bg-gray-200 bg-opacity-25 w-100% h-auto p-6">             
           <div>
             <div className=" bg-gray-100 w-5/6 pb-20 flex-row m-24  justify-center item-center border-2 border-4 border-gray-400">
             <div>
                {model2 &&
                   <Complaintmodel />
                }

                {model1 && 
                    <Ratemodel />
                }
              </div>
              <div className="grid grid-cols-5 p-6 ml-20 item-center text-xl font-bold">
                  <div className="mx-2 p-2 ">Items</div>
                  <div className="mx-2 p-2 ">Price</div>
                  <div className="mx-2 p-2 ">Qty</div>
                  <div className="mx-2 p-2 ">Subtotal</div>
                  <div className="mx-2 p-2 "></div>
              </div>
              <div className="ml-20 p-6 divide-y item-center">
              {order.map((item)=>(
                    <div class=" grid grid-cols-5 ml-6  " key={item.id} >
                      <div className="my-4 p-2">{item.Item}</div>
                      <div className="my-4 p-2">{item.price}</div>
                      <div className="my-4 p-2">{item.Qty}</div>
                      <div className="my-4 p-2">{item.subtotal}</div>
                      <div className="my-4 p-2"><button className=" w-36 h-12 bg-yellow-200 hover:bg-yellow-300 text-black border-2 rounded-sm focus:outline-none" onClick={toggleModel}>Review & Rate </button></div>                          
                    </div>                        
                  ))}                     
              </div>
              <div className="flex justify-center ml-96 my-8">Total :2400</div>
              <div className="flex justify-end mr-28">
                  <button className="place-content-end w-36 h-12 bg-red-200 hover:bg-red-500 focus:outline-none" onClick={togglecomplain}>Complain</button>                   
              </div>
             </div>
                
           </div>
       </div>

    )
}

export default Order;
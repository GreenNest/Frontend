import React from 'react';
import {useState} from 'react';
import Complaintmodel from './Complaintmodel';
import Ratemodel from './Ratemodel';

 const Order = () => {
    const[order, setOrders]= useState(
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
             <div className=" bg-gray-100 w-5/6 pb-20 flex-row m-24  justify-center item-center border-dotted border-4 border-gray-400">
             <div>
                {model2 &&
                   <Complaintmodel />
                }
              </div>
                  <div className="grid grid-cols-5 p-6 ml-20 item-center text-xl ">
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
                          <div className="my-4 p-2"><button className=" w-36 h-12 bg-maingreen hover:bg-secondarygreen text-mainyellow rounded-sm" onClick={toggleModel}>Review & Rate </button></div>
                          {model1 && 
                           <Ratemodel />
                          }
                        </div>
                      ))}

                  </div>
                  <div className="flex justify-end mr-28">
                     <button className="place-content-end w-36 h-12 bg-green-300 hover:bg-green-500" onClick={togglecomplain}>Complain </button>
                     
                  </div>
             </div>
                
           </div>
       </div>

    )
}

export default Order;
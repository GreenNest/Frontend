import React from 'react';
import {useState} from 'react';
import Complaintmodel from './Complaintmodel';
import Ratemodel from './Ratemodel';
import b_avacado from "../../../assets/b_avacado.jpg"
import lemmon from "../../../assets/lemmon.jpg"
import plastic_pot from "../../../assets/plastic_pot.jpg"
import sensavaria from "../../../assets/sensavaria.jpg"

 const Order = () => {
    const[order]= useState(
        [
            {img:b_avacado, Item:"Budded Avacado", price:450, Qty:2, subtotal:900, id:1 } ,
            {img:lemmon,Item:"Lemmon plant", price:350, Qty:2, subtotal:700, id:2 } ,
            {img:sensavaria,Item:"Sensavaria", price:1350, Qty:1, subtotal:1350 , id:3 } ,
            {img:plastic_pot,Item:"Pastic Pot", price:150, Qty:4, subtotal:600 , id:4 } 
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
       
       <div className="bg-gray-200 bg-opacity-25 w-100% h-auto p-6 shadow-xl">             
           <div>
             <div className=" bg-white shadow-2xl shadow-maingreen w-11/12 pb-20 flex-row m-24  justify-center item-center border-2 border-4 border-gray-400">
             <div>
                {model2 &&
                   <Complaintmodel />
                }

                {model1 && 
                    <Ratemodel />
                }
              </div>
              <div className="grid grid-cols-6 p-6 ml-8 mb-4 item-center text-xl font-bold">
                  <div className="mx-2 "></div>
                  <div className="mx-2  ">Ordered Items</div>
                  <div className="mx-2  ">Price</div>
                  <div className="mx-2  ">Qty</div>
                  <div className="mx-2  ">Subtotal</div>
                  <div className="mx-2  "></div>
              </div>
              <div className="ml-16 p-6 divide-y item-center">
              {order.map((item)=>(
                    <div class=" grid grid-cols-6 " key={item.id} >
                      <div className="my-4 "><img className="w-12 h-12 " src={item.img} alt="not found" /></div>
                      <div className="my-4 ">{item.Item}</div>
                      <div className="my-4 ">{item.price}</div>
                      <div className="my-4 ">{item.Qty}</div>
                      <div className="my-4 ">{item.subtotal}</div>
                      <div className="my-4 "><button className=" w-36 h-12 bg-yellow-200 hover:bg-yellow-300 text-black border-2 rounded-sm focus:outline-none" onClick={toggleModel}>Review & Rate </button></div>                          
                    </div>                        
                  ))}                     
              </div>
              <div className="flex justify-end mr-96 pr-12 my-8">Total :3550</div>
              <div className="flex justify-end mr-28">
                  <button className="place-content-end w-36 h-12 bg-red-200 hover:bg-red-500 focus:outline-none" onClick={togglecomplain}>Complain</button>                   
              </div>
             </div>
                
           </div>
       </div>

    )
}

export default Order;
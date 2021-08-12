import React from 'react';
import {useState} from 'react';
import Complaintmodel from './Complaintmodel';
import Ratemodel from './Ratemodel';
import b_avacado from "../../../assets/b_avacado.jpg"
import lemmon from "../../../assets/lemmon.jpg"
import plastic_pot from "../../../assets/plastic_pot.jpg"
import sensavaria from "../../../assets/sensavaria.jpg"
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
 const Order = () => {
    const[order]= useState(
        [
            {img:b_avacado, Item:"Budded Avacado", price:'350LKR', Qty:1, subtotal:'350LKR', id:1 } ,
            {img:lemmon,Item:"Lemmon plant", price:'950LKR', Qty:1, subtotal:'950LKR', id:2 } ,
            {img:sensavaria,Item:"Sensavaria", price:'1750LKR', Qty:1, subtotal:'1750LKR', id:3 } ,
            {img:plastic_pot,Item:"Pastic Pot", price:'250LKR', Qty:2, subtotal:'500LKR', id:4 } 
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
      <>
      <Header/>
      <div className="w-100% h-auto mt-14 shadow-xl pb-14">             
        <div>
          <div className="flex-row justify-center w-5/6 mx-auto bg-gray-100 rounded-md item-center">
            <div>
              {model2 &&
                  <Complaintmodel />
              }
              {model1 && 
                  <Ratemodel />
              }
            </div>
            <div className="grid grid-cols-6 p-6 mb-4 text-xl font-bold item-center">
              <div className="mx-2 "></div>
              <div className="mx-2 ">Ordered Items</div>
              <div className="mx-2 ml-8">Price</div>
              <div className="mx-2 ">Qty</div>
              <div className="mx-2 -ml-3">Subtotal</div>
              <div className="mx-2 "></div>
            </div>
            <div className="p-6 ml-12 text-lg divide-y item-center">
              {order.map((item)=>(
                <div class=" grid grid-cols-6 " key={item.id} >
                  <div className="my-4 "><img className="w-12 h-12 " src={item.img} alt="not found" /></div>
                  <div className="my-4 -ml-5">{item.Item}</div>
                  <div className="my-4 ">{item.price}</div>
                  <div className="my-4 ">{item.Qty}</div>
                  <div className="my-4 -ml-4">{item.subtotal}</div>
                  <div className="my-4 "><button className="h-12 text-base font-medium text-black bg-yellow-200 rounded w-36 hover:bg-yellow-300 focus:outline-none" onClick={toggleModel}>Review & Rate </button></div>                          
                </div>                        
              ))}                     
            </div>

            <div className="flex justify-end pb-10 mr-14">
              <div className="flex pr-1 text-xl font-medium">Total :</div>
              <div className="mr-20 text-xl font-medium">3550LKR</div>
              <button className="h-12 text-base font-medium text-white bg-red-800 rounded place-content-end w-36 hover:bg-red-600 focus:outline-none" onClick={togglecomplain}>Complain</button>                   
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
}

export default Order;
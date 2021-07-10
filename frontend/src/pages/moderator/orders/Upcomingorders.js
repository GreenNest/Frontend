import React from 'react';
import {useState} from 'react';
import Cashondelivery from './Cashondelivery';
import Onlinedelivery from './Onlinedelivery';
import Search from './components/Search';
const Upcomingorders = () => {

    const [active,setActive] =useState("Onlinedelivery");
    
    return ( 
        <div>
            <div className="flex justify-end pb-4 mt-8 mr-10">
               <div className="bg-gray-500 bg-opacity-25 w-9/12 p-4 mx-4 pb-12 rounded">
                   <h1 className="flex justify-center w-full font-bold text-2xl text-maingreen pt-4">Upcoming Orders</h1>
                   <div className="flex justify-end w-full mt-6 mr-8 mb-6">
                       <Search className="w-3/4"/>
                   </div>
                   <div className="divide-x-2 divide-maingreen pb-4">
                       <button className="w-1/2 h-12 justify-center  text-xl font-bold border-opacity-0 focus:outline-none focus:text-yellow-600 hover:text-gray-500 focus:font-bold" onClick={()=> setActive("Onlinedelivery")} >Online Payment</button>
                       <button className="w-1/2 h-12  justify-center  text-xl font-bold border-opacity-0 focus:outline-none focus:text-yellow-600 hover:text-gray-500 focus:font-bold" onClick={()=> setActive("Cashondelivery")} >Cash On Delivery</button>
                   </div>
                  
                   <div>
                      {active === "Onlinedelivery" && <Onlinedelivery/>}
                      {active === "Cashondelivery" && <Cashondelivery/>}
                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default Upcomingorders;
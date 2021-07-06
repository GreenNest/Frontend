import React from 'react';
import {useState} from 'react';
import Cashondelivery from './Cashondelivery';
import Onlinedelivery from './Onlinedelivery';
import Search from './components/Search';
const Upcomingorders = () => {

    const [active,setActive] =useState("Onlinedelivery");
    
    return ( 
        <div>
            <div className="flex justify-end pb-6 mt-12 mr-10 ">
               <div className="bg-gray-200 w-5/6 p-4 mx-4 pb-12">
                   <h1 className="text-4xl font-bold flex justify-center w-full text-maingreen pt-4">Upcoming Orders</h1>
                   <div className="flex justify-end w-full mt-8 mr-8 mb-8">
                       <Search className="w-3/4"/>
                   </div>
                   <div className="divide-x-2 divide-maingreen pb-12">
                       <button className="w-1/2 h-12 justify-center  text-xl font-bold border-opacity-0 focus:outline-none focus:text-yellow-600 focus:font-bold" onClick={()=> setActive("Onlinedelivery")} >ONLINE PAYMENT</button>
                       <button className="w-1/2 h-12  justify-center  text-xl font-bold border-opacity-0 focus:outline-none focus:text-yellow-600 focus:font-bold" onClick={()=> setActive("Cashondelivery")} >CASHON DELIVERY</button>
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
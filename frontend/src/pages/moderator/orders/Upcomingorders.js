import React from 'react';
import {useState} from 'react';
import Cashondelivery from './Cashondelivery';
import Onlinedelivery from './Onlinedelivery';
import Search from './components/Search';
const Upcomingorders = () => {

    const [active,setActive] =useState("Onlinedelivery");
    
    return ( 
        <div>
            <div className="flex justify-end pb-6 mt-20 ">
               <div className="bg-gray-100 w-3/4 p-4 mx-4 pb-4">
                   <div className="divide-x-2 divide-green-500">
                       <button className="w-1/2 h-12 justify-center  text-xl border-opacity-0 focus:outline-none focus:text-yellow-600 focus:font-bold" onClick={()=> setActive("Onlinedelivery")} >Online Payment</button>
                       <button className="w-1/2 h-12  justify-center  text-xl  border-opacity-0 focus:outline-none focus:text-yellow-600 focus:font-bold" onClick={()=> setActive("Cashondelivery")} >Cashon deleivery</button>
                   </div>
                   <div className="flex justify-start w-full mt-8 mr-8 mb-12">
                       <Search className="w-3/4"/>
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
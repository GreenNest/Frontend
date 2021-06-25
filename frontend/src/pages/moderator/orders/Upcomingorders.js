import React from "react";
import Onlinedelivery from "./Onlinedelivery";


const Upcomingorders = () => {
    return ( 
        <div className="">
            <div className="flex justify-end pb-6 mt-12 ">
               <div className="bg-gray-100 w-3/4 p-4 m-4 pb-4">
                   <div className="divide-x-2 divide-green-500">
                       <button className="w-1/2 h-12 justify-center  text-xl border-opacity-0 focus:outline-none"  >Online Payment</button>
                       <button className="w-1/2 h-12  justify-center  text-xl  border-opacity-0 focus:outline-none" >Cashon deleivery</button>
                   </div>
                   <div>
                       search
                   </div>
                   <div>
                      <Onlinedelivery />
                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default Upcomingorders;
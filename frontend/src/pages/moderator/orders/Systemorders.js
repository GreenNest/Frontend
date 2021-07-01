import React from "react";
import {FaCheckDouble} from "react-icons/fa";
import Filterbtn from "./components/Filterbtn";
import Search from "./components/Search";

const Systemorders = () => {
    return ( 
        <div className="">
            <div className="flex justify-end pb-6 mt-12 ">
               <div className="bg-gray-100 w-3/4 p-4 m-4 pb-4">
                    <div className="block md:flex">
                        <div className="mt-4 flex justify-center mb-12">
                            <Search />
                        </div>                      
                            <Filterbtn Type="Online Delivery"/>
                            <Filterbtn Type="Cashon Delivery"/>
                    </div>
                   <div>
                      
                   <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>                        
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>     
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>  
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                 
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>                        
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>     
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>  
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                 
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>                        
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>     
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>  
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                 
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>                        
                    </div>

                    <div className="flex grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">10.22</div>
                        <div className="mt-2">K.Madhushanka</div>     
                        <div className="text-xl ml-20 mt-2 flex justify-end md:justify-start"><FaCheckDouble/></div>  
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                 
                    </div>
                     
                    
                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default Systemorders;
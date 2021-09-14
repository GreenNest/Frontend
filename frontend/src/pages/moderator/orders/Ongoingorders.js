import React from "react";
import Search from "./components/Search";
import ModeratorSidebar from '../components/moderatorSidebar';


const OngoingOrders = () => {
    return ( 
        
        <div className="">
        <ModeratorSidebar/>
            <div className="flex justify-end pb-6 mt-8 mr-10 ">
               
               <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                   <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Ongoing Orders</h1>
                   <div className="block w-full h-16 px-4 py-4 mt-8 md:flex md:space-x-28 md:h-20 md:bg-gray-400">                    
                            <div className="md:flex md:justify-center lg:visible">
                            <div ><h4 className="flex w-20 mx-6 mt-3 font-bold text-l">Filter By :</h4></div>
                                <form className="md:flex w-96 ">
                                        <div className="flex ">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="w-6 h-12 p-4 checked:bg-blue-400 "/>
                                            <label for="online" className="flex my-3 ml-3 mr-10 font-semibold">Online Delivery</label> 
                                        </div> 
                                        <div className="flex">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="w-6 h-12 p-4 checked:bg-maingreen "/>
                                            <label for="online" className="flex my-3 ml-3 mr-10 font-semibold ">Cashon Delivery</label> 
                                        </div>                         
                                {/* </form> */}
                                {/* <form className="flex"> */}                       
                                </form>
                                        <input type="text" placeholder="Date" className="w-48 h-8 p-4 m-2 -ml-2 rounded focus:outline-none"/>
                                        <input type="text" placeholder="Enter keyword" className="h-8 px-8 py-4 m-2 rounded md:w-48 focus:outline-none"/>
                                        {/* <input type="button" value="Search" className="w-24 h-8 m-3 focus:outline-none"/>   */}
                            </div>
                                                                
                        
                            <div className="flex justify-center visible w-full -mt-16 md:invisible">
                                <Search className="h-12 md:hide"/>
                            </div>
                    </div>
                <div>    

                   <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="font-semibold text-red-500">Pending payment</h3></div>                     
                    </div>

                    <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="font-semibold text-red-500">Pending payment</h3></div>                     
                    </div>

                    <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="grid w-full grid-rows-6 p-4 my-4 border-b border-black rounded-md shadow md:grid-rows-1 md:grid-cols-6 bg-gray-50">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="font-semibold text-red-500">Pending payment</h3></div>                     
                    </div>

                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default OngoingOrders;
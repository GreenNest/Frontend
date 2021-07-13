import React from "react";
import Search from "./components/Search";


const OngoingOrders = () => {
    return ( 
        <div className="">
            <div className="flex justify-end pb-6 mt-8 mr-10 ">
               
               <div className="bg-gray-500 bg-opacity-25 w-9/12 p-4 mx-4 pb-12 rounded">
                   <h1 className="flex justify-center w-full font-bold text-2xl text-maingreen pt-4">Ongoing Orders</h1>
                   <div className="block md:flex md:space-x-28 w-full h-16 md:h-20 md:bg-gray-400 mt-8 px-4 py-4">                    
                            <div className="md:flex md:justify-center lg:visible">
                            <div ><h4 className="flex mx-6 w-20 mt-3 font-bold text-l">Filter By :</h4></div>
                                <form className="md:flex w-96 ">
                                        <div className="flex ">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="h-12 p-4 w-6 checked:bg-blue-400 "/>
                                            <label for="online" className="my-3 mr-10 ml-3 flex font-semibold">Online Delivery</label> 
                                        </div> 
                                        <div className="flex">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="h-12 p-4  w-6 checked:bg-maingreen "/>
                                            <label for="online" className=" my-3 mr-10 ml-3 flex font-semibold">Cashon Delivery</label> 
                                        </div>                         
                                {/* </form> */}
                                {/* <form className="flex"> */}                       
                                </form>
                                        <input type="text" placeholder="Date" className="h-8 m-2 p-4 -ml-2 w-48 focus:outline-none rounded"/>
                                        <input type="text" placeholder="Enter keyword" className="h-8 m-2 py-4 px-8 md:w-48 focus:outline-none rounded"/>
                                        {/* <input type="button" value="Search" className="h-8 m-3 w-24 focus:outline-none"/>   */}
                            </div>
                                                                
                        
                            <div className="visible -mt-16 flex justify-center w-full md:invisible">
                                <Search className="h-12 md:hide"/>
                            </div>
                    </div>
                <div>    

                   <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="font-semibold text-red-500">Pending payment</h3></div>                     
                    </div>

                    <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="font-semibold text-red-500">Pending payment</h3></div>                     
                    </div>

                    <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4 rounded-md">
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
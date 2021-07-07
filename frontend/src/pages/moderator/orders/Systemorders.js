import React from "react";
// import {FaCheckDouble} from "react-icons/fa";
// import Filterbtn from "./components/Filterbtn";
import Search from "./components/Search";

const Systemorders = () => {
    return ( 
        <div className="">
            <div className="flex justify-end pb-6 mt-12 mr-10 ">
               
               <div className="bg-gray-200 w-5/6 p-4 mx-4 pb-12">
                   <h1 className="text-4xl font-bold flex justify-center w-full text-maingreen pt-4">Order History</h1>
                   <div className="block md:flex md:space-x-28 w-full h-16 md:h-20 md:bg-gray-300 mt-8 px-4 py-4">                    
                            <div className="md:flex md:justify-center invisible  lg:visible">
                            <div ><h4 className="flex mx-6 w-20 mt-3 font-bold text-l">Filter By :</h4></div>
                                <form className="md:flex w-96 ">
                                        <div className="flex ">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="h-12 p-4 w-6 checked:bg-blue-400 "/>
                                            <label for="online" className="my-3 mr-10 ml-3 flex">Online Delivery</label> 
                                        </div> 
                                        <div className="flex">
                                            <input  type="checkbox" id="Online" name="online" value="Online" className="h-12 p-4  w-6 checked:bg-maingreen "/>
                                            <label for="online" className=" my-3 mr-10 ml-3 flex">Cashon Delivery</label> 
                                        </div>                         
                                {/* </form> */}
                                {/* <form className="flex"> */}                       
                                </form>
                                        <input type="text" placeholder="Date" className="h-8 m-3 p-4 w-48 focus:outline-none"/>
                                        <input type="text" placeholder="Enter word" className="h-8 m-3 py-4 px-8 md:w-72 focus:outline-none"/>
                                        <input type="button" value="Search" className="h-8 m-3 w-24 focus:outline-none"/>  
                            </div>
                                                                
                        
                            <div className="visible -mt-16 flex justify-center w-full md:invisible">
                                <Search className="h-12 md:hide"/>
                            </div>
                    </div>
                <div>    

                   <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                   
                    </div>

                    <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                    
                    </div>

                    <div className="flex w-full grid grid-rows-6  md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>                        
                    </div>

                    <div className="flex w-full grid grid-rows-6 md:grid-rows-1 md:grid-cols-6 bg-gray-50 border-black border-b shadow p-4 my-4">
                        <div  className="mt-2" >10002</div>
                        <div className="mt-2">H.K.Saman</div>
                        <div className="mt-2">Kurunagala</div>
                        <div className="mt-2">2021/06/23</div>
                        <div className="mt-2">K.Madhushanka</div>   
                        <div className="mt-2"><h3 className="  text-blue-500">Paid</h3></div>                     
                    </div>

                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default Systemorders;
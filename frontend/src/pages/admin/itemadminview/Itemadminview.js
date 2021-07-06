import React from 'react'
import product_card from '../../customer/Shop/productdata';
import {FaEdit,FaSearch,FaTrashAlt} from "react-icons/fa";

const Itemadminview = () => {


    const listitems = product_card.map((item)=>
      <div className="flex my-8 mx-12 bg-white border-2 shadow-lg grid grid-cols-5 gap-12">
           <div className="m-6"><img className="w-12 h-12  transform hover:scale-150" src={item.thumb} /></div>
           <div className="m-6">{item.product_name}</div>
           <div className="m-6">{item.reorderlevel}</div>
           <div className="m-6">{item.qty}</div>
           <div className="flex space-x-8 m-6">
                <FaEdit />
                <FaTrashAlt />
            </div>      
      </div>
    );




    return ( 
        <div className=" h-full py-6 justify-end">
            <div className="flex flex-row w-3/4  ml-96 pb-5 mt-32 absoulte grid grid-cols-2">
                    <div>
                        <button className="bg-secondarygreen p-4 justify-center text-gray-50   rounded border-opacity-0 focus:outline-none" >ADD Item + </button>
                    </div>
                    <div className="flex space-x-4   p-4 " >
                        <input  className="w-3/4 h-8 bg-gray-50 p-4 ml-48 border-2 border-gray-300 focus:outline-none" placeholder="Search"/>
                        <FaSearch className="text-2xl mt-1"/>
                    </div>
            </div> 


            <div className="w-3/4 bg-gray-100 ml-96 pb-6">

                <div className="flex  h-20  mx-12 grid grid-cols-5 gap-12 text-xl font-semibold">
                   <div  className=" mt-8 px-4"></div>
                   <div className=" mt-8 px-4">Item Name</div>
                   <div className=" mt-8 px-4">Reorder Level</div>
                   <div className=" mt-8 px-4">Qty</div>    
                </div>

                <div >
                    {listitems }
                </div>

            </div>
        </div>
     );
}
 
export default Itemadminview;
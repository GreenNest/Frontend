import React from 'react'
import product_card from '../../customer/Shop/productdata';
import * as FaIcons from "react-icons/fa";
// import {FaEdit,FaSearch,FaTrashAlt} from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from "react-router-dom";
import Search from '../components/Search';

const ItemAdminView = () => {


    const listitems = product_card.map((item)=>
      <div className="my-8 mx-12 bg-white border-2 font-semibold shadow-lg grid grid-cols-5 gap-12 rounded-md">
           <div className="m-6"><img className="w-12 h-12  transform hover:scale-150" src={item.thumb} /></div>
            {/* <Link to="/shop/product"> */}
                <div className="m-0 mt-8 text-maingreen hover:text-hovergreen">{item.product_name}</div>
            {/* </Link> */}
           <div className="m-6 mt-8 text-red-600">{item.reorderlevel}</div>
           <div className="m-6 mt-8 text-maingreen">{item.qty}</div>
           <div className="flex space-x-8 m-6">
                <Link to="/admin/editItem">
                    <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
                </Link>
                <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5"/>
            </div>      
      </div>
    );




    return ( 
        <div className="w-11/12 h-full -ml-10 -mt-20 justify-end">
            <div className=" flex-row w-3/4 ml-96 pb-5 mt-24 absoulte grid grid-cols-2">
                    <div>
                        <Link to="/admin/addItem">
                            <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold ml-0 mb-8 rounded py-2 px-4" >Add Item + </button>
                        </Link>
                    </div>
                    {/* <div className="flex space-x-4 p-4 mr-12" > */}
                        {/* <input  className="w-3/4 h-8 bg-gray-50 p-4 ml-48 border-2 border-gray-300 focus:outline-none" placeholder="Search"/>
                        <FaSearch className="text-2xl mt-1"/> */}
                        <div className="ml-44 w-72"><Search className=""/></div>
                    {/* </div> */}
            </div> 


            <div className="w-3/4 bg-gray-500 bg-opacity-25 ml-96 pb-6 -mt-10 rounded">

                <div className=" h-20 mx-12 grid grid-cols-5 gap-12 text-sm font-semibold -mb-16">
                   <div className="mt-6 px-4"></div>
                   <div className=" mt-6 px-1">Item Name</div>
                   <div className=" mt-6 -px-4">Reorder Level</div>
                   <div className=" mt-6 px-4">Qty</div>    
                </div>

                <div className="">
                    {listitems }
                </div>

            </div>
        </div>
     );
}
 
export default ItemAdminView;
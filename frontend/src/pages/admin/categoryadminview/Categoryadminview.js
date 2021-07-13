import React from 'react'
import Addcategorypopup from './Addcategorypopup';
import {useState} from 'react';
import {FaClipboardList} from "react-icons/fa";
// import categoryview from "../../../assets/categoryview.jpg"
import Categorydata from './Categorydata';
import { Link } from "react-router-dom";
import Search from '../components/Search';
import AdminSidebar from '../components/adminSidebar';

const CategoryAdminView = () =>{

    const categories= Categorydata.map((category)=>
            
            <div className="w-64 h-40 justify-center items-center grid grid-rows mx-11 mt-6 bg-white rounded shadow-xl mb-10" key={category.id}>
                <FaClipboardList className="text-maingreen h-8 w-12 -mt-2"/>  
                <Link to="/admin/categoryView/itemView">                    
                    <div className="w-full h-20 font-semibold">
                        <div className="mt-12 text-xl hover:text-hovergreen">{category.categoryname}</div>
                        <h3 className="text-red-600 font-bold">Items :{category.items}</h3>
                    </div>
                </Link>
            </div>
              
    );

    const [model,setModel] = useState(false);
    const toggleModel3 = () => {
        setModel(!model)
      }


    return (
        <>
        <AdminSidebar/>
        <div className="w-11/12 h-full ml-28 justify-end ">
            <div className="w-3/4 ml-96 pb-5">  
              <div>
                {model && <Addcategorypopup />}
              </div>
            </div>   

            
                <div className="bg-gray-500 w-5/6 mr-8 mb-8 bg-opacity-25 float-right rounded" >
                    <h4 className="flex justify-center m-8 text-maingreen font-bold text-2xl">View Category</h4>
                    <div className="float-right mr-12"><Search /></div>
                    <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold ml-12 mb-8 rounded py-2 px-4" onClick={toggleModel3}>Add Category + </button>
                    <div className="-mt-1 flex items-center flex-wrap cursor-pointer">{categories}</div>
                </div> 
            
        </div>
        </>
    )
}

export default CategoryAdminView

import React from 'react'
import Addcategorypopup from './Addcategorypopup';
import {useState} from 'react';
import {FaClipboardList} from "react-icons/fa";
import categoryview from "../../../assets/categoryview.jpg"
import Categorydata from './Categorydata';
import { Link } from "react-router-dom";
import Search from '../../moderator/orders/components/Search';

const Categoryadminview = () =>{

    const categories= Categorydata.map((category)=>
            <Link to="/admin/categoryview/itemview">
            <div className="w-72 h-64 flex justify-center grid grid-rows mb-20 mx-8 mt-6 bg-white rounded   shadow-xl " key={category.id}>
                <FaClipboardList className="text-secondarygreen h-8 w-12 -mt-2"/>                      
                <div className="w-full h-20 text-xl font-semibold"><h2 className="mt-12">{category.categoryname}</h2></div>
                <div className=" w-full h-16"><h3 className="text-maingreen font-bold">Items :{category.items}</h3></div>
            </div>
            </Link>  
    );

    const [model,setModel] = useState(false);
    const toggleModel3 = () => {
        setModel(!model)
      }


    return (
        <div className=" h-full justify-end ">
            <div className="w-3/4 ml-96 pb-5">
                
                
              <div>
                {model &&  
                    
                   <Addcategorypopup />
                }
              </div>
            </div>   

            
                <div className="bg-gray-300 w-5/6 mr-8 mb-8 bg-opacity-25 float-right" >
                    <h4 className="flex justify-center m-8 text-maingreen font-bold text-4xl">All Categories</h4>
                    <div className="float-right mr-12"><Search /></div>
                <button className="bg-secondarygreen p-4 justify-center text-gray-50 ml-8 mb-8 rounded border-opacity-0 focus:outline-none" onClick={toggleModel3}>ADD Category + </button>
                    <div className=" flex items-center  flex-wrap cursor-pointer">{categories}</div>
                </div> 
            
        </div>
    )
}

export default Categoryadminview

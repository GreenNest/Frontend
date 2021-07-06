import React from 'react'
import Addcategorypopup from './Addcategorypopup';
import {useState} from 'react';
import Categorydata from './Categorydata'
import { Link } from "react-router-dom";

const Categoryadminview = () =>{

    const categories= Categorydata.map((category)=>
            <div className="w-1/4 h-64 flex justify-center items-center flex-col relative mb-20 mx-8 mt-6  bg-gray-50 transition-all duration-75 ease-in-out transform scale-100 shadow hover:scale-110 hover:cursor-pointer hover:shadow-xl " key={category.id}>                        
                <div className="w-full bg-blue-100 h-48 text-2xl font-semibold"><h2 className="m-12">{category.categoryname}</h2></div>
                <div className=" w-full h-16"><h3 className="m-4 text-green-500 font-base">Items :{category.items}</h3></div>
            </div>
    );

    const [model,setModel] = useState(false);
    const toggleModel3 = () => {
        setModel(!model)
      }

    return (
        <div className="bg-gray-100 h-full pb-6 justify-end">
            <div className="w-3/4 bg-gray-100 ml-96 pb-5">
                 <button className="bg-secondarygreen p-4 justify-center text-gray-50 ml-24 mt-32 rounded border-opacity-0 focus:outline-none" onClick={toggleModel3}>ADD Category + </button>
                 <div>
                {model &&
                   <Addcategorypopup />
                }
              </div>
            </div>   

            <Link to="/admin/categoryview/itemview">
                <div className=" w-3/4 bg-gray-100 ml-96">
                    <div className=" flex items-center relative  w-11/12  my-3 mx-12 p-4 box-border  flex-wrap cursor-pointer">{categories}</div>
                </div> 
            </Link>  
        </div>
    )
}

export default Categoryadminview

import React, { useEffect, useState } from 'react'
import Productcard from './Productcard';
import product_data from "./productdata";
import axios from 'axios';

function Productlist (props){
    const data = props.type;


    return (
        <div className="mr-5 main">         
         <h3 className="items-center justify-center mx-12 mt-10 mb-4 text-2xl font-bold sm:text-5xl text-maingreen" >{props.type}</h3>      
           <div className="box-border relative mr-4 cursor-pointer">
                <div className="grid md:grid-cols-4">
                    
                </div>
            
            </div>      
         </div>  
    )
}

export default Productlist;

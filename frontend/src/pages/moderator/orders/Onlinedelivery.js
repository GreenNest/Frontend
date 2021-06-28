import React from 'react';
import {FaArrowAltCircleRight} from "react-icons/fa";
import Orderdata from './orderdata';
const Onlinedelivery = () => {


    const order = Orderdata.map((item)=>
        <div className="flex grid grid-cols-7 bg-gray-200 p-4 my-4">
            <div  className="mt-2" >{item.orderid}</div>
            <div className="mt-2">{item.customername}</div>
            <div className="mt-2">{item.Location}</div>
            <div className="mt-2">{item.Date}</div>
            <div className="mt-2">{item.Date}</div>
            <select name="Deliverpersons" >
                <option value="M.K.Samarasingha">M.K.Samarasingha</option>
                <option value="D.G.Nishantha">D.G.Nishantha</option>
                <option value="M.D.Nimal">M.D.Nimal</option>
                <option value="K.Madhushanka">K.Madhushanka</option>
            </select>
            <div className="text-3xl ml-20 mt-2"><FaArrowAltCircleRight/></div>
        </div>
    
    
    );
    return ( 
    <div>
       {order}
    </div>


    
     );
}
 
export default Onlinedelivery;
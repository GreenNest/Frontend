
import React from 'react';
import {FaArrowAltCircleRight} from "react-icons/fa";
import Orderbar from './components/Orderbar';
import Orderdata from './orderdata';


function Cashondelivery(props) {
    return (
        <div>
             {Orderdata.map((item) => (
              <div 
               key={item.orderid}
              >
              <Orderbar 
              orderid={item.orderid} 
              customername={item.customername} 
              Location={item.Location} 
              Date={item.Date} 
              time={item.time} 
              payment="Pending Payment"
              icon={<FaArrowAltCircleRight/>}
              />
              </div>
          ))}
            
        </div>
    )
}

export default Cashondelivery

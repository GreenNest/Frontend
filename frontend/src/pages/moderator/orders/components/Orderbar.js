import React from 'react';

const Orderbar = (props) => {
    return (
        <div className="flex w-full grid grid-rows-8 md:grid-cols-8 bg-gray-200 p-4 my-4">
            <div  className="mt-2" >{props.orderid}</div>
            <div className="mt-2">{props.customername}</div>
            <div className="mt-2">{props.Location}</div>
            <div className="mt-2">{props.Date}</div>
            <div className="mt-2">{props.time}</div>
            <div className="mt-2"><h3 className=" text-red-500 ">{props.payment}</h3></div>
            <div className="mt-2 flex justify-start ml-2">
                <select name="Deliverpersons"  >
                    <option value="M.K.Samarasingha">M.K.Samarasingha</option>
                    <option value="D.G.Nishantha">D.G.Nishantha</option>
                    <option value="M.D.Nimal">M.D.Nimal</option>
                    <option value="K.Madhushanka">K.Madhushanka</option>
                </select>
            </div> 
            <div className="text-3xl  mt-2 flex justify-end">{props.icon}</div>
        </div> 

     );
}
 
export default Orderbar;
import React from 'react';

const Orderbar = (props) => {
    return (
        <div className="flex w-full grid grid-rows-7 md:grid-cols-7 bg-gray-50 rounded-md border-black border-b shadow p-4 my-4">
            <div  className="mt-2" >{props.orderid}</div>
            <div className="mt-2">{props.customername}</div>
            <div className="mt-2">{props.Location}</div>
            <div className="mt-2">{props.Date}</div>
            <div className="mt-2"><h3 className=" text-red-500 font-semibold -ml-3">{props.payment}</h3></div>
            <div className="mt-2 flex justify-start ml-2" id={props.bool===true}>
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
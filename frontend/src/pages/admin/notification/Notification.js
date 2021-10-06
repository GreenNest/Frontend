import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';
import StockUpdatePopup from "./StockUpdatePopup";

function Notification () {

    const [setPopup, setsetPopup] = useState(false);
    const [productName, setproductName] = useState("");
    const [reorderLevel, setreorderLevel] = useState([]);
    var history = useHistory();

    useEffect(() => {
        checkValidate();
        getReorderLevel();
    }, [])

    const checkValidate = async() => {
        const y = JSON.parse(localStorage.getItem('authorization')); 
        if(!y){
            <Redirect to='/login' />
        }else{
            if(y.roles[0] == "moderator" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
                history.push("/error");
            }
        }
    }

    const update = async (name) => {
        setsetPopup(true);
        setproductName(name);
    }

    const reorderLevelGet =  async () => {
        const result = await api.get("/getReorderLevel");
        return result.data;
    }

    const getReorderLevel = async () => {
        const allDetails = await reorderLevelGet();
        if(allDetails) {
            setreorderLevel(allDetails);
        };
    }

    return (
        <>
            <AdminSidebar/>
            <div className="flex items-start justify-end mt-8 mb-10 ml-10">
                <div className="w-3/4 px-16 py-10 bg-gray-500 bg-opacity-25 rounded sm:mx-10">                
                    <h4 className="text-3xl font-bold text-center text-maingreen">Reorder Level Notifications</h4>
                    <div className="grid grid-cols-2 gap-x-10">
                    {
                        reorderLevel.length !== 0 ? (
                            reorderLevel.map((reoder, index) => (
                                <div key={index} className="w-auto p-4 mt-10 bg-white border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl">
                                    <div className="flex flex-col md:mx-5 gap-y-3">
                                        <div className="w-3/4">
                                            <div className="grid grid-cols-2">
                                                <p className="font-semibold text-green-900 text-medium">Product Name : </p>
                                                <p className="font-medium text-medium">{reoder.name}</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <p className="font-semibold text-green-900 text-medium">Quantity : </p>
                                                <p className="font-medium text-medium">{reoder.amount}</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-medium">Update the stock of this plant. Update the stock of this plant.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="justify-center w-40 p-4 px-4 py-2 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={() => update(reoder.name)} >Update Stock</button>
                                    </div>
                                </div>
                            ))
                        ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                There are No Reorder Level Requests.
                            </h4> 
                    }
                    </div>
                </div>  
            </div>
            { setPopup ? (
                <StockUpdatePopup canclePopup={() => setsetPopup(false)} productName={productName} getReorderLevel={getReorderLevel} />
            ): null }
        </>
    );
}

export default Notification;
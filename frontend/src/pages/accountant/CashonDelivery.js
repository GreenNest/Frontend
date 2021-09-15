import React,{useState, useEffect} from 'react';
import CashonTable from './CashonTable';
import AccountantSidebar from './dashboard/components/accountantSidebar';
import CustomerService from '../../services/CustomerService';



function CashonDelivery() {
    const [data, setData] = useState([]);
    // const [message, setMessage] = useState([]);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async()=> {
        CustomerService.getAllCoOrders().then((result) => {
            console.log(result.data.data);
            if(result.data.data !== null){
                setData(result.data.data);
                console.log(data);
            }
        }).catch((err) => {
            console.log(err.response);
            // setMessage(err.response.data.message);
        })
    }

    return (
        <div>
        <AccountantSidebar/>
            <div className="flex justify-end pb-4 mt-8 mr-10">
                <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Cash On Delivery Details</h1>
                <div className="flex flex-col mt-2 sm:mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="w-1/5 py-3 text-lg font-semibold tracking-wider text-gray-700">ORDoice ID</th>
                                    <th className="w-1/5 py-3 text-lg font-semibold tracking-wider text-gray-700">Prduct Quantity</th>
                                    <th className="w-1/5 py-3 text-lg font-semibold tracking-wider text-gray-700">Total Cost (RS)</th>
                                    <th className="w-1/5 py-3 text-lg font-semibold tracking-wider text-gray-700">Date</th>
                                    
                                    <th className="w-1/5 py-3 text-lg font-semibold tracking-wider text-gray-700" >Edit</th>



                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                            {data.length !== 0 ? data.map((item, id) => 
                                <CashonTable order_id={item.id} product_quantity={item.items} total_cost={item.cost} date={item.date} key={id} />
                            ) : <tr className="flex items-center justify-center overflow-hidden text-lg">
                                 <td>Empty</td>
                            </tr>}

                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


                </div>

            </div>

        </div>

            
        
    );



}



export default CashonDelivery;
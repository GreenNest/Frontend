import React, { useState, useEffect} from 'react';
import ModeratorSidebar from '../components/moderatorSidebar';
import DeliveryPersonTable from './DeliveryPersonTable';
import api from "../../../axiosContact";

function DeliveryPerson() {

    const [deliveryPersons, setdeliveryPersons] = useState([]);

    const retrieveDeliveryPersons = async () => {
        const res = await api.get("/getDeliveryPersons");
        return res.data;
    };

    const getDeliveryPersons = async () => {
        const allDeliveryPersons = await retrieveDeliveryPersons();
        if (allDeliveryPersons) {
            setdeliveryPersons(allDeliveryPersons);
        };
    }

    useEffect(() => {
        getDeliveryPersons();
    }, [])
    
    return (
        <>
            <ModeratorSidebar/>
            <div className="flex items-start justify-end mt-8 mb-10 ml-10">
                <div className="w-3/4 px-10 pt-10 bg-gray-500 bg-opacity-25 rounded sm:mx-10">                
                    <h4 className="text-3xl font-bold text-center text-maingreen">Delivery Persons</h4>
                    <div className="flex mt-6 mb-12 overflow-x-auto border-b border-gray-200 shadow verflow-hidden sm:rounded-lg">
                        {
                            deliveryPersons.length !== 0 ? (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-500 bg-opacity-25">
                                        <tr>
                                            <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Name</th>
                                            <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Address</th>
                                            <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Mobile</th>
                                            <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Status</th>
                                            <th className="relative px-6 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            deliveryPersons.map((deliveryPerson, index) => (
                                                <DeliveryPersonTable key={index} first_name={deliveryPerson.first_name} last_name={deliveryPerson.last_name} address={deliveryPerson.address} email={deliveryPerson.email} mobile={deliveryPerson.mobile} status={deliveryPerson.available} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            ) : <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                    There are no Delivery Persons in the company.
                                </h4>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeliveryPerson;
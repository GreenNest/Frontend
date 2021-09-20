import React, { useState, useEffect} from "react";
import ModeratorSidebar from '../components/moderatorSidebar';
import api from '../../../axiosContact';
import { useParams } from "react-router-dom";

function RequestItemSuppliers () {

    const { productName } = useParams();
    const [suppliers, setsuppliers] = useState([]);

    const retrieveRequestSuppliers = async () => {
        const res = await api.get(`/suppliersByRequest/${productName}`);
        return res.data.data;
    };

    const getReauestSuppliers = async () => {
        const allSuppliers = await retrieveRequestSuppliers();
        if (allSuppliers) {
            setsuppliers(allSuppliers);
        };
    }

    useEffect(() => {
        getReauestSuppliers();
    }, [])

    return (
        <>
            <ModeratorSidebar/>
            <div className="flex items-start justify-end mt-8 mb-10 ml-10">
                <div className="w-3/4 px-10 pt-10 bg-gray-500 bg-opacity-25 rounded sm:mx-10">
                    {
                        suppliers.length !== 0 ? (
                            suppliers.map((contact, index) => (
                                contact.suppliers.length !== 0 ? (
                                    <div key={index}>
                                        <h4 className="text-3xl font-bold text-center text-maingreen">{contact.categoryName}</h4>
                                        <div className="flex mt-6 mb-12 overflow-x-auto border-b border-gray-200 shadow verflow-hidden sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-500 bg-opacity-25">
                                                    <tr>
                                                        <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Name</th>
                                                        <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Address</th>
                                                        <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Mobile</th>
                                                        <th className="relative px-6 py-3"></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {
                                                        contact.suppliers.map((supplier, index) => (
                                                            supplier.account_status == 0 ? (
                                                                <tr>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <div className="text-base font-medium text-gray-900">{supplier.first_name} {supplier.last_name}</div>
                                                                        <div className="text-base font-medium text-gray-500">{supplier.email}</div>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                                        <div className="text-base font-medium text-gray-900">{supplier.address}</div>
                                                                    </td>
                                                                    <td className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap">0{supplier.mobile}</td>
                                                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                                            Contact
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ): null
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ): null
                            ))
                        ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                There are no Suppliers joing with the company.
                            </h4> 
                    }
                </div>
            </div>
        </>
    );
}

export default RequestItemSuppliers;
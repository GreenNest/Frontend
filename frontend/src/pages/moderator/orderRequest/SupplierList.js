import React, { useState, useEffect} from "react";
import SupplierTable from "./components/SupplierTable";
import ModeratorSidebar from '../components/moderatorSidebar';
import api from "../../../axiosContact";

function SupplierList () {

    const [suppliers, setsuppliers] = useState([]);

    const retrieveSuppliers = async () => {
        const res = await api.get("/suppliersByCategory");
        return res.data.data;
    };

    const getSuppliers = async () => {
        const allSuppliers = await retrieveSuppliers();
        if (allSuppliers) {
            setsuppliers(allSuppliers);
        };
    }

    useEffect(() => {
        getSuppliers();
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
                                                        <th className="relative px-6 py-3">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {
                                                        contact.suppliers.map((supplier, index) => (
                                                            supplier.account_status == 0 ? (
                                                                <SupplierTable key={index} first_name={supplier.first_name} last_name={supplier.last_name} address={supplier.address} email={supplier.email} mobile={supplier.mobile} />
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

export default SupplierList;
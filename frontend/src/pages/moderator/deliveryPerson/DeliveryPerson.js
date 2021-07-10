import React from 'react';
import { Link } from "react-router-dom";

const DeliveryPerson = () => {
    return (
        <div className="w-11/12 ml-48">
        <div className="flex flex-col mx-8 my-10 mt-0 md:mx-40 sm:mx-10">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="flex mb-10 mt-8 justify-center font-bold text-2xl text-maingreen">Delivery Persons List</div>
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left ">Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left ">NIC</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left ">Mobile</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left">Status</th>
                                    <th className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Sulakshanee Theja</div>
                                        <div className="text-base text-gray-500">Sulakshanee@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">977224523v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0711229957</td>
                                    <td className="px-6 py-4 text-base font-semibold whitespace-nowrap text-maingreen">Available</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Chatuhrika Lakmini</div>
                                        <div className="text-base text-gray-500">lakmini@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">945698215v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0751236589</td>
                                    <td className="px-6 py-4 text-base font-semibold text-red-500 whitespace-nowrap">Unavailable</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Hiruni Pabasara</div>
                                        <div className="text-base text-gray-500">pabasara@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">994521368v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0778542365</td>
                                    <td className="px-6 py-4 text-base font-semibold whitespace-nowrap text-maingreen">Available</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base font-medium text-gray-900">Piumi Dulanjali</div>
                                        <div className="text-base text-gray-500">dulanjali@gmail.com</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-base text-gray-900">977453652v</div>
                                    </td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0764523279</td>
                                    <td className="px-6 py-4 text-base font-semibold text-red-500 whitespace-nowrap">Unavailable</td>
                                    <td className="px-6 py-4 text-base font-medium text-left whitespace-nowrap">
                                        <Link to="#" className="text-indigo-600 hover:text-indigo-900">
                                            Contact
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default DeliveryPerson;
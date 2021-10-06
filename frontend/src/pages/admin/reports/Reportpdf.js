import React from 'react';

function Reportpdf () {
        
    return (
            <div className="flex items-center justify-center w-3/4 bg-gray-500 bg-opacity-25 rounded ">
                <div className="flex flex-col w-10/12 mt-8 mb-16">
                    <h4 className="mb-8 text-3xl font-bold text-center text-maingreen">Product Sales Report</h4>
                    <div className="">
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Product Name : Cactus Plant</p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Time Duration : 2021.08.14 - 2021.09.14</p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Total Item Quantity : 67</p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2 mb-8">
                            <p className="text-lg font-semibold text-gray-700">Total Price : 33,500 LKR</p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        
                    </div>

                    <div className="w-full mt-5 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Customer</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Address</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Mobile</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Item Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Hiruni Amarakoon</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Koongahagedara, Kuliyapitiya</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0711195124</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">5</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Chathurika Perera</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Ridigama, Kurunegala</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0765665321</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">8</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Sulakshani Theja</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Sooriyawewa, Hambantota</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0375746112</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">15</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Piumi Dulanjali</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Polgahawela, Kurunegala</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0717814526</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">12</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Darshana Bandara</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Ibbagamuwa, Kurunegala</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0751248596</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">2</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Thusitha Karunathilaka</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">Katupotha, Kuliyapitiya</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">0777896321</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">25</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Reportpdf
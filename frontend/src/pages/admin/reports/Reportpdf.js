import React from 'react';

function Reportpdf () {
        
    return (
            <div className="flex items-center justify-center w-3/4 bg-gray-500 bg-opacity-25 rounded">
                <div className="flex flex-col w-10/12 mt-5 mb-5">
                    <h4 className="mb-5 text-3xl font-bold text-center text-maingreen">Report</h4>
                    <div className="">
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Product Name : </p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Stock Quantity : </p>
                            <p className="font-medium text-medium"></p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-lg font-semibold text-gray-700">Time Duration : </p>
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
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">abcd</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">abcd</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">abcd</td>
                                    <td className="px-6 py-4 text-base text-gray-900 whitespace-nowrap">abcd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default Reportpdf
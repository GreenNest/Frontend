import React, { Component } from 'react';

class Reportpdf extends Component{

    render(){
        return (

            <div className="flex items-center justify-center w-full h-auto">
                <div className="flex items-center justify-center w-9/12 mt-20 mb-10 bg-gray-500 bg-opacity-25 rounded ">
                    <div className="flex flex-col justify-start w-8/12 mt-20 border-black">
                        <div className="inline-flex justify-center w-full h-auto pt-2 pb-2 font-bold border-b-2 text-maingreen text-30 item-center">
                            Report
                        </div>

                        <div className="mt-3 font-bold text-black ml-9">
                            Product Name    :
                        </div>

                        <div className="mt-3 font-bold text-black ml-9">
                            Stock Quantity  :
                        </div>

                        <div className="mt-3 font-bold text-black ml-9">
                            Time Duration   :
                        </div>

                        <table className="w-10/12 mt-3 border border-collapse ml-9">
                        <tr>
                            <th className="w-3/12 p-3 text-base bg-gray-400">Customer</th>
                            <th className="w-3/12 p-3 text-base bg-gray-400">Address</th>
                            <th className="w-3/12 p-3 text-base bg-gray-400">Contact Number</th>
                            <th className="w-3/12 p-3 text-base bg-gray-400">Ordered Quantity</th>

                        </tr>
                        <tr>
                            <td className="p-3 text-sm text-center">abcd</td>
                            <td className="p-3 text-sm text-center">abcd</td>
                            <td className="p-3 text-sm text-center">abcd</td>
                            <td className="p-3 text-sm text-center">abcd</td>

                        </tr>

                        </table>

                    </div>
                </div>
            </div>

        )
    }


}

export default Reportpdf
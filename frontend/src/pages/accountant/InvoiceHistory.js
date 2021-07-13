import React, {Component} from 'react';
import { useState } from 'react';

import InvoiceTable from './InvoiceTable';





class InvoiceHistory extends Component{
    render(){
    return (
        <div>
            <div className="flex justify-end pb-4 mt-8 mr-10">
                <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                

                <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Invoice History</h1>
                <div className="flex flex-col mt-6 sm:mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Invoice ID</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">View More</th>
                         
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Delete</th>



                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                <InvoiceTable invoice_id="INV 1007" />
                                <InvoiceTable invoice_id="INV 1009" />
                                <InvoiceTable invoice_id="INV 1012" />
                                <InvoiceTable invoice_id="INV 1013" />
                                <InvoiceTable invoice_id="INV 1017" />
                                <InvoiceTable invoice_id="INV 1015" />

                                

                                

                                

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

    }



 export default InvoiceHistory;

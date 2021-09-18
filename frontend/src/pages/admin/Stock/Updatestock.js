import React from 'react';
import { Link } from "react-router-dom";
import StockTable from './StockTable';
import AdminSidebar from '../components/adminSidebar';
import Search from '../components/Search';

function UpdateStock () {
    
    return (
        <>
            <AdminSidebar/>
            <div className="w-10/12 h-full ml-44">
                <div className="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded">
                    <h4 className="m-8 text-3xl font-bold text-center text-maingreen">Update Stock</h4>
                    <div className="float-right mr-12">
                        <Search />
                    </div>
                    <Link to="/admin/addSupplier">
                        <button className="justify-center p-4 px-4 py-2 mb-2 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Stock + </button>
                    </Link>
                    
                    <div className="m-10 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Category ID</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Producy ID</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Quantity</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Unit Price</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Date</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Time</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                <StockTable category_id="CT1001"  productid="1100"  quantity="15"  unit_price="100.00"   date='2021/05/20' time='7.00 pm'/>
                                <StockTable category_id="CT1005"  productid="2101"  quantity="100"  unit_price="280.00"   date='2021/05/25' time='06.00 am' />
                                <StockTable category_id="CT1012"  productid="1290"  quantity="45"  unit_price="50.00"   date='2021/06/04' time='12.00 pm' />
                                <StockTable category_id="CT1009"  productid="3120"  quantity="53"  unit_price="130.00"   date='2021/06/10' time='10.00apm' />
                                <StockTable category_id="CT1003"  productid="2393"  quantity="67"  unit_price="75.00"   date='2021/06/13' time='08.00 am' />
                                <StockTable category_id="CT1006"  productid="2345"  quantity="49"  unit_price="68.00"   date='2021/06/15' time='10.40 am'/>
                                <StockTable category_id="CT1045"  productid="1234"  quantity="200"  unit_price="230.00"   date='2021/06/22' time='11.00 am'/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateStock;
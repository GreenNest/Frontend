import React, { Component } from 'react';
import {useState} from 'react';
import StockTable from './StockTable';



    class Updatestock extends Component{
        render(){
        return (
            <div>
                <div className="flex justify-end pb-4 mt-8 mr-10">
                    <div className="w-9/12 p-4 pb-12 mx-4 bg-gray-500 bg-opacity-25 rounded">
                    <button className="justify-center p-4 px-6 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">
                        Add + 
                        </button>

                    <h1 className="flex justify-center w-full pt-4 text-2xl font-bold text-maingreen">Update Stock</h1>
                    <div className="flex flex-col mt-2 sm:mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
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
            </div>


                    </div>

                </div>
            </div>
        );
        }

        }

export default Updatestock;
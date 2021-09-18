import React, { Component } from 'react';
import ReactDOMServer from "react-dom/server";

export class Invoice extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
   generate = () => {
   
       
   };

    render() {
        return (
            <div className="w-full h-screen">
                <div className="flex justify-start flex-col" id="content">
                    <div className="w-full h-auto pt-3 pb-3 bg-mainyellow text-maingreen font-bold text-50 inline-flex justify-center item-center">Green Nest</div>
                    <div className="mt-4 ml-14 text-2xl text-secondarygreen font-semibold">Thank you for your order</div>
                    <div className="mt-5">Hi Hiruni, </div>
                    <div className="mt-3">Thanks for your order. Its on buld untill we confirm that payment has been received.</div>
                    <div className="text-secondarygreen font-bold text-2xl mt-3">Order Details</div>
                    <div className="mt-4 text-20 text-maingreen">Date: 2021-03-02</div>
                    <table className="w-8/12 border-collapse border mt-4">
                        <tr>
                            <th className="w-5/12 p-3 text-xs bg-gray-400">Product</th>
                            <th className="w-4/12 p-3 text-xs bg-gray-400">Quatity</th>
                            <th className="w-3/12 p-3 text-xs bg-gray-400">Price</th>
                        </tr>
                        <tr>
                            <td className="p-3 text-xs bg-red-200 text-center">Mango Plant</td>
                            <td className="p-3 text-xs bg-blue-200">5</td>
                            <td className="p-3 text-xs bg-yellow-200">500 LKR</td>
                        </tr>
                    </table>
                    <div></div>
                </div>
                <button onClick={this.generate} type="primary">Generate PDF</button>
                
            </div>
        )
    }
}

export default Invoice

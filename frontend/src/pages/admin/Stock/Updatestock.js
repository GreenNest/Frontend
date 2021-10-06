import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockTable from './StockTable';
import AdminSidebar from '../components/adminSidebar';
import Search from '../components/Search';
//import "antd/dist/antd.css";
import * as XLSX from "xlsx";


function UpdateStock () {
    const [items, setItems] = useState([]);

    const readExcel = (file) => {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
  
          const wb = XLSX.read(bufferArray, { type: "buffer" });
  
          const wsname = wb.SheetNames[0];
  
          const ws = wb.Sheets[wsname];
  
          const data = XLSX.utils.sheet_to_json(ws);
  
          resolve(data);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  
      promise.then((d) => {
        setItems(d);
      });
    };
  
    
    return (
        <>
            <AdminSidebar/>
            <div className="w-10/12 h-full ml-66 mt-12">
                <div className="float-right mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded">
                    <h4 className="m-8 text-3xl font-bold text-center text-maingreen">Update Stock</h4>
                    {/* <div className="float-right mr-12">

                        <Search />
                    </div>
                    <Link to="/admin/addSupplier">
                        <button className="justify-center p-4 px-4 py-2 mb-2 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Stock + </button>
                    </Link>   */}

                    {/* <Link to="/admin/addSupplier">
                        <button className="justify-center p-4 px-4 py-2 mb-2 ml-12 mr-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen"> Save </button>
                    </Link>   */}

                    <input
                    className="ml-10"
                        type="file"
                        onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                        }}
                    />
                    
                    <div className="m-10 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-500 bg-opacity-25">
                                <tr>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Category</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Product Name</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Unit Price</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Quantity</th>
                                    {/* <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Description</th>
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Reorder Level</th> */}
                                    {/* <th scope="col">Item</th>
                                    <th scope="col">Description</th> */}
                                    <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                {/* <StockTable category_id="CT1001"  productid="1100"  quantity="15"  unit_price="100.00"   date='2021/05/20' time='7.00 pm'/>
                                <StockTable category_id="CT1005"  productid="2101"  quantity="100"  unit_price="280.00"   date='2021/05/25' time='06.00 am' />
                                <StockTable category_id="CT1012"  productid="1290"  quantity="45"  unit_price="50.00"   date='2021/06/04' time='12.00 pm' />
                                <StockTable category_id="CT1009"  productid="3120"  quantity="53"  unit_price="130.00"   date='2021/06/10' time='10.00apm' />
                                <StockTable category_id="CT1003"  productid="2393"  quantity="67"  unit_price="75.00"   date='2021/06/13' time='08.00 am' />
                                <StockTable category_id="CT1006"  productid="2345"  quantity="49"  unit_price="68.00"   date='2021/06/15' time='10.40 am'/>
                                <StockTable category_id="CT1045"  productid="1234"  quantity="200"  unit_price="230.00"   date='2021/06/22' time='11.00 am'/> */}
                                {items.map((d) => (
                                    // <tr key={d.Category_id}>
                                    // <th>{d.Product_id}</th>
                                    // <td>{d.Quantity}</td>
                                    // <th>{d.Unite_price}</th>
                                    // <td>{d.Date}</td>
                                    // <th>{d.Time}</th>
                                    // <td>delete</td>
                                    // </tr>

                                    <StockTable category={d.Category}  product={d.Product_Name}  quantity={d.Quantity}  unit_price={d.Unit_Price}  des={d.Description} reorder={d.Re_Order_Level}/>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateStock;
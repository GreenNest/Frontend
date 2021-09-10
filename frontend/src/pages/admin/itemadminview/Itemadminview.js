import React, { useState, useEffect } from 'react'
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import { Link, useParams } from "react-router-dom";
import Search from '../components/Search';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function ItemAdminView() {

    const { name } = useParams();
    const [products, setProducts] = useState([]);

    const retrieveProducts = async (categoryName) => {
        const res = await api.get(`/product/${categoryName}`);
        return res.data.data;
    };

    const getProducts = async (categoryName) => {
        const allProducts = await retrieveProducts(categoryName);
        if (allProducts) {
            setProducts(allProducts);
        };
    }

    useEffect(() => {
        getProducts(name);
    }, [])

    return ( 
        <>
            <AdminSidebar/>
            <div className="w-11/12 h-full ml-28">
                <div className="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded" >
                    <h4 className="m-8 text-3xl font-bold text-center text-maingreen">{name}</h4>
                    <div className="float-right mr-12">
                        <Search />
                    </div>
                    <Link to="/admin/addItem">
                        <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Item + </button>
                    </Link>

                    <div className="flex flex-wrap items-center mb-8">
                        <div className="grid grid-cols-6 mx-12 -mb-3 text-xl font-bold text-center gap-x-12 px-7">
                            <div></div>
                            <div>Item Name</div>
                            <div>Unit Price</div>
                            <div>Quantity</div>
                            <div>Reorder Level</div>
                            <div></div>
                        </div>

                        {
                            products.map((item, index)=> (
                            <div key={index} className="grid items-center w-full grid-cols-6 py-3 mx-12 mt-8 text-xl font-semibold text-center bg-white border-2 rounded-md shadow-lg px-7 gap-x-12">
                                <div>
                                    <img className="m-auto w-26 h-26" src={item.mainImage} />
                                </div>
                                <div className="text-maingreen">{item.name}</div>
                                <div className="text-maingreen">{item.price}</div>
                                <div className="text-maingreen">{item.amount}</div>
                                <div className="text-red-600">{item.reorder_level}</div>
                                <div className="flex justify-center space-x-8">
                                    <Link to="/admin/editItem">
                                        <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
                                    </Link>
                                    <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5"/>
                                </div>      
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>     
        </>
     );
}
 
export default ItemAdminView;
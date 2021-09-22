import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, Link, useParams } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import Search from '../components/Search';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductByCategory() {

    const { name } = useParams();
    const [products, setProducts] = useState([]);
    var history = useHistory();

    useEffect(() => {
        checkValidate();
        getProducts(name);
    }, [])

    const checkValidate = async() => {
        const y = JSON.parse(localStorage.getItem('authorization')); 
        if(!y){
            <Redirect to='/login' />
        }else{
            if(y.roles[0] == "moderator" || y.roles[0] == "customer" || y.roles[0] == "accountant"){
                history.push("/error");
            }
        }
    }

    const deleteProduct = async (id) => {
        const res = await api.put(`/deleteProduct/${id}`);
        return res.data;
    };

    const productDelete = async (id) => {
        if (window.confirm("Are you sure to remove this product?")) {
            const result = await deleteProduct(id);
            if(result === 1){
                getProducts(name);
                toast('Successfully Delete Product', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
            }
        }
    }

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

                    {
                        products.length !== 0 ? (
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
                                            <img className="m-auto w-26 h-26" src={"data:image/jpeg;base64," +item.mainImage} />
                                        </div>
                                        <div className="text-maingreen">{item.name}</div>
                                        <div className="text-maingreen">{item.price}</div>
                                        <div className="text-maingreen">{item.amount}</div>
                                        <div className="text-red-600">{item.reorder_level}</div>
                                        <div className="flex justify-center space-x-8">
                                            <Link to="/admin/editItem">
                                                <FaIcons.FaEdit className="w-5 h-5 mt-2 hover:text-hovergreen"/>
                                            </Link>
                                            <MdDeleteSweep className="w-6 h-6 hover:text-red-700 mt-1.5" onClick={() => productDelete(item.id)}/>
                                        </div>      
                                    </div>
                                    ))
                                }
                            </div>
                        ):
                            <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                There are no {name} in the company.
                            </h4> 
                    }
                </div>
            </div>     
        </>
     );
}
 
export default ProductByCategory;
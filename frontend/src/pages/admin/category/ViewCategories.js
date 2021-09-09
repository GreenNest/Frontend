import React, {useState, useEffect} from 'react'
import AddCategory from './AddCategory'
import {FaClipboardList} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from '../components/Search';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function ViewCategories() {

    const [allCategories, setallCategories] = useState([]);
    const [addCategoryPopup, setaddCategoryPopup] = useState(false);

    useEffect(() => {
        getCategories();
    }, [])

    const retrieveCategories = async () => {
        const res = await api.get("/get/categories");
        // console.log(res.data)
        return res.data;
    };

    const getCategories  = async () => {
        const categories = await retrieveCategories();
        if (categories) {
            setallCategories(categories.data);
        };
    }

    return (
        <>
            <AdminSidebar/>
            <div className="justify-end w-11/12 h-full ml-28 ">
                <div className="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded" >
                    <h4 className="flex justify-center m-8 text-2xl font-bold text-maingreen">View Category</h4>
                    <div className="float-right mr-12">
                        <Search />
                    </div>
                    <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={() => setaddCategoryPopup(true)} >Add Category + </button>
                    <div className="flex flex-wrap items-center -mt-1 cursor-pointer">
                        {
                            allCategories.map((category, index) => (
                                <Link to="/admin/categoryView/itemView">
                                    <div key={index} className="grid items-center justify-center w-64 h-40 mt-6 mb-10 bg-white rounded shadow-xl grid-rows mx-11" key={category.id}>
                                        <FaClipboardList className="w-12 h-8 -mt-2 text-maingreen"/>  
                                        <div className="w-full h-20 font-semibold">
                                            <div className="mt-8 text-xl font-medium hover:text-hovergreen">{category}</div>
                                            <h3 className="font-bold text-green-800">Items :10</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            { addCategoryPopup ? (
                <AddCategory canclePopup={() => setaddCategoryPopup(false)}/>
            ): null }
        </>
    )
}

export default ViewCategories;

import React, {useState, useEffect} from 'react'
import AddCategory from './AddCategory'
import {FaClipboardList} from "react-icons/fa";
// import categoryview from "../../../assets/categoryview.jpg"
// import Categorydata from './Categorydata';
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
        const res = await api.get("/getCategories");
        return res.data;
    };

    const getCategories  = async () => {
        const categories = await retrieveCategories();
        if (categories) {
            setallCategories(categories);
        };
    }

    // const [model,setModel] = useState(false);
    // const toggleModel3 = () => {
    //     setModel(!model)
    // }

    return (
        <>
            <AdminSidebar/>
            <div className="justify-end w-11/12 h-full ml-28 ">
                <div className="w-3/4 pb-5 ml-96">  
                {/* <div>
                    {model && <AddCategory />}
                </div> */}
                </div>
                    <div className="float-right w-5/6 mb-8 mr-8 bg-gray-500 bg-opacity-25 rounded" >
                        <h4 className="flex justify-center m-8 text-2xl font-bold text-maingreen">View Category</h4>
                        <div className="float-right mr-12">
                            <Search />
                        </div>
                        <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={() => setaddCategoryPopup(true)} >Add Category + </button>
                        <div className="flex flex-wrap items-center -mt-1 cursor-pointer">
                            {
                                allCategories.map((category) => (
                                    <div className="grid items-center justify-center w-64 h-40 mt-6 mb-10 bg-white rounded shadow-xl grid-rows mx-11" key={category.id}>
                                        <FaClipboardList className="w-12 h-8 -mt-2 text-maingreen"/>  
                                        <Link to="/admin/categoryView/itemView">                    
                                            <div className="w-full h-20 font-semibold">
                                                <div className="mt-12 text-xl hover:text-hovergreen">{category.category_name}</div>
                                                <h3 className="font-bold text-red-600">Items :10</h3>
                                            </div>
                                        </Link>
                                    </div>
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

import React, { useState, useEffect } from 'react';
import CheckBox from "../components/CheckBox";
import AdminSidebar from '../components/adminSidebar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../axiosContact';

function AddSupplier(props) {

    const [allCategories, setallCategories] = useState([]);
    const [usedCategory, setusedCategory] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState();
    const [email_error, setemail_error] = useState("");
    const [mobile_error, setmobile_error] = useState("");

    useEffect(() => {
        getCategories();
    }, [])

    const retrieveCategories = async () => {
        const res = await api.get("/get/categories");
        return res.data;
    };

    const getCategories  = async () => {
        const categories = await retrieveCategories();
        if (categories) {
            setallCategories(categories.data);
        };
    }

    const validate = () => {

        if(!email.includes("@")){
            setemail_error("Invalida email");
            // formValid = false;
        }

        if(mobile.length < 10){
            setmobile_error("Invalid mobile number");
            // formValid = false;
        }

        if(email_error || mobile_error){
            return false;
        }
        
        return true;
    }

    const supplierAdd = async () => {
        const res = await api.post("/addSupplier", {
            first_name: firstName,
            last_name: lastName,
            address: address,
            email: email,
            mobile: mobile,
            account_status: 0,
            categories: usedCategory,
        });
        return res.data;
    }

    // const usedCategoryAdd = async (categories) => {
    //     // console.log(categories)
    //     const res = await api.get(`/usedCategoryAdd/${categories}`);
    //     return res.data;
    // }

    const addSupplier = () => {
        const isValid = validate();
        console.log(isValid)
        if (isValid) {
            const result = supplierAdd(usedCategory);
            if(result){
                toast('Successfully add supplier', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position:toast.POSITION.TOP_CENTER
                });
            }
        }
    }

    return (
        <>
            <AdminSidebar/>
            <div className="flex flex-col w-11/12 ml-48 space-y-10">
                <div className="flex justify-center mx-16">
                    <div className="w-full p-8 mt-6 bg-gray-500 bg-opacity-25 rounded-md shadow-inner md:w-1/2 sm:w-3/4">
                        <div className="mt-0 mb-6 text-2xl font-bold tracking-wide text-center text-maingreen">Add Supplier</div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 mb-4 space-y-2 md:w-1/2 md:mb-0">
                                <label className="w-2/3 p-1 text-lg font-semibold" for="grid-first-name">First Name</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="firstName"
                                    type="text"
                                    placeholder="Eg: Theja"
                                    onChange={(e) => {
                                        setfirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-2/3 p-1 text-lg font-semibold" for="grid-last-name">Last Name</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="lastName"
                                    type="text"
                                    placeholder="Eg: Kumari"
                                    onChange={(e) => {
                                        setlastName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 space-y-2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-address">Address</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="address"
                                    type="text"
                                    placeholder="Eg: No.379, Temple Road, Galle"
                                    onChange={(e) => {
                                        setaddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-first-name">Email</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="email"
                                    type="text"
                                    placeholder="Eg: thejakuma@gmail.com"
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                />
                                <div class="text-red-600 pl-1">{email_error}</div>
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-last-name">Mobile</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="mobile"
                                    type="text"
                                    placeholder="Eg: 0775433332"
                                    onChange={(e) => {
                                        setmobile(e.target.value);
                                    }}
                                />
                                <div class="text-red-600 pl-1">{mobile_error}</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full px-3 space-y-2">
                                <label className="w-2/3 p-2 text-lg font-semibold" for="grid-state">Product Categories</label>
                                <div className="grid grid-cols-2 gap-2 mt-2 ml-6 md:grid-cols-3">
                                    {
                                        allCategories.map((category,index) => (
                                            <CheckBox key={index} name={category} type={[usedCategory, setusedCategory]} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center mt-6 -mb-12 space-x-6">
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={addSupplier}>Submit</button>
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white bg-red-600 rounded hover:bg-lightred">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddSupplier;
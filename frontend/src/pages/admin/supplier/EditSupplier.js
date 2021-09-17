import React, { useState, useEffect } from "react";
import CheckBox from "../components/CheckBox";
import AdminSidebar from '../components/adminSidebar';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../axiosContact';

function EditSupplier () {

    const { id } = useParams();
    const [allCategories, setallCategories] = useState([]);
    const [usedCategory, setusedCategory] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState();
    const [email_error, setemail_error] = useState("");
    const [mobile_error, setmobile_error] = useState("");
    const [errorProfile, seterrorProfile] = useState("");

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

    const retrieveSuppplier = async (id) => {
        const res = await api.get(`/supplierById/${id}`);
        return res.data.data;
    };

    const getSupplier = async (id) => {
        const supplierData = await retrieveSuppplier(id);
        if (supplierData) {
            setfirstName(supplierData.first_name);
            setlastName(supplierData.last_name);
            setaddress(supplierData.address);
            setemail(supplierData.email);
            setmobile(supplierData.mobile);
        };
    }

    useEffect(() => {
        getCategories();
        getSupplier(id);
    }, [])

    const closeForm = async () => {
        setfirstName("");
        setlastName("");
        setaddress("");
        setemail("");
        setmobile( );
        setusedCategory([]);
        seterrorProfile("");
    }

    const validate = () => {

        if (!email.includes("@") || mobile.length < 10) {

            if (!email.includes("@")) {
                setemail_error("Invalid email");
            }
            
            if (mobile.length < 10) {
                setmobile_error("Invalid mobile number");
            }

            return false;
        }

        return true;
    }

    const supplierEdit = async () => {
        const res = await api.put(`/editSupplier/${id}`, {
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

    const editSupplier = (event) => {
        event.preventDefault();
        const isValid = validate();
        console.log(isValid)
        if (isValid) {
            const result = supplierEdit();
            console.log(result)
            if (result === 1) {
                closeForm();
                toast('Successfully Edit Supplier', {
                    autoClose: false,
                    closeOnClick: true,
                    progress: false,
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                seterrorProfile("Already created supplier using this email.");
            }
        }
    }

    return (
        <>
        {
            console.log(errorProfile)
        }
            <AdminSidebar/>
            <div className="flex flex-col w-full ml-28">
                <div className="flex justify-center mx-16">
                    <div className="w-full p-8 my-8 bg-gray-500 bg-opacity-25 rounded-md shadow-inner md:w-1/2 sm:w-3/4">
                        <h4 className="text-3xl font-bold text-center text-maingreen">Edit Supplier</h4>
                        {
                            errorProfile.length !== 0 ? (
                                <div className="px-3 mt-3 -mb-3 text-xl text-red-600">{errorProfile}</div>
                            ): null
                        }
                        <div className="flex flex-wrap mt-8 mb-4">
                            <div className="w-full px-3 mb-4 space-y-2 md:w-1/2 md:mb-0">
                                <label className="w-2/3 p-1 text-lg font-semibold" for="grid-first-name">First Name</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    placeholder="Eg: Theja"
                                    onChange={(e) => {
                                        setfirstName(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-2/3 p-1 text-lg font-semibold" for="grid-last-name">Last Name</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    placeholder="Eg: Kumari"
                                    onChange={(e) => {
                                        setlastName(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 space-y-2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-address">Address</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="address"
                                    type="text"
                                    value={address}
                                    placeholder="Eg: No.379, Temple Road, Galle"
                                    onChange={(e) => {
                                        setaddress(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-first-name">Email</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="email"
                                    type="text"
                                    value={email}
                                    placeholder="Eg: thejakuma@gmail.com"
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                    required
                                />
                                <div class="text-red-600 pl-1">{email_error}</div>
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-last-name">Mobile</label>
                                <input className="block w-full p-2 px-4 py-3 leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="mobile"
                                    type="text"
                                    value={mobile}
                                    placeholder="Eg: 0775433332"
                                    onChange={(e) => {
                                        setmobile(e.target.value);
                                    }}
                                    required
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
                        <div className="flex flex-wrap justify-center mt-12 -mb-8 space-x-6">
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={editSupplier}>Submit</button>
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={closeForm}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditSupplier;
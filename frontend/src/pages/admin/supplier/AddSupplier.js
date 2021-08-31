import React, { useState } from 'react';
import CheckBox from "../components/CheckBox";
import AdminSidebar from '../components/adminSidebar';
import { toast } from 'react-toastify';
import api from '../../../axiosContact';

function AddSupplier(props) {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState();

    const validate = () => {
        let email_err= "";
        let mobile_err = "";
        let formValid = "";

        if(!email.includes("@")){
           email_err = "Invalida email";
           formValid = false;
        }

        if(mobile.length < 10){
            mobile_err = "Invalid mobile number";
            formValid = false;
        }

        if(email_err || mobile_err){
            // this.setState({ email_err, mobile_err})
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
        });
        return res.data;
    }

    const addSupplier = () => {
        const isValid = validate();
        if (isValid) {
            const result = supplierAdd();
            if(result == 1){
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
                                <input className="block w-full p-2 px-4 py-3 text-lg leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="firstName"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setfirstName(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-2/3 p-1 text-lg font-semibold" for="grid-last-name">Last Name</label>
                                <input className="block w-full p-2 px-4 py-3 text-lg leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="lastName"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setlastName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 space-y-2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-address">Address</label>
                                <input className="block w-full p-2 px-4 py-3 text-lg leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="address"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setaddress(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-first-name">Email</label>
                                <input className="block w-full p-2 px-4 py-3 text-sm leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="email"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="w-1/3 p-1 text-lg font-semibold" for="grid-last-name">Mobile</label>
                                <input className="block w-full p-2 px-4 py-3 text-lg leading-tight text-black border-2 border-solid rounded outline-none hover:border-hovergreen focus:border-maingreen"
                                    name="mobile"
                                    type="text"
                                    placeholder=""
                                    onChange={(e) => {
                                        setmobile(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full px-3 space-y-2">
                                <label className="w-2/3 p-2 text-lg font-semibold" for="grid-state">Product Categories</label>
                                <div className="grid grid-cols-2 gap-2 mt-2 ml-6 md:grid-cols-3">
                                    <CheckBox name="Fruit Plants" />
                                    <CheckBox name="Food Plants" />
                                    <CheckBox name="Flower Plants" />
                                    <CheckBox name="Indoor Plants" />
                                    <CheckBox name="Outdoor Plants" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center mt-6 -mb-12 space-x-6">
                            {/* <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-redcolor">Cancel</button>
                            <button type="submit" className="p-2 text-base font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none background-transparent hover:shadow-lg focus:outline-none bg-maingreen hover:bg-secondarygreen">Submit</button> */}
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
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function AddEmployee () {

    const { nic } = useParams();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [address, setaddress] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [email_error, setemail_error] = useState("");
    const [mobile_error, setmobile_error] = useState("");
    const [errorProfile, seterrorProfile] = useState("");
    var history = useHistory();

    useEffect(() => {
        checkValidate();
        getEmployee();
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

    const retrieveContact = async () => {
        const res = await api.get(`/getEmployee/${nic}`);
        return res.data;
    };

    const getEmployee = async () => {
        const contac = await retrieveContact();
        if (contac) {
            setfirstName(contac.first_name);
            setlastName(contac.last_name);
            setaddress(contac.address);
            setemail(contac.userProfile.email);
            setmobile(contac.mobile);
        };
    }
    
    const closeForm = async () => {
        setfirstName("");
        setlastName("");
        setaddress("");
        setemail("");
        setmobile("");
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

    const editEmployee = (event)=>{
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            setemail_error("");
            setmobile_error("");
            api.put(`/editEmployee/${nic}`, {
                first_name: firstName,
                last_name: lastName,
                address: address,
                email: email,
                mobile: mobile,
            }).then((result) => {
                console.log(result.data);
                if (result.data === 1) {
                    closeForm();
                    toast('Successfully Edit Employee', {
                        autoClose: false,
                        closeOnClick: true,
                        progress: false,
                        position: toast.POSITION.TOP_CENTER
                    });
                }else {
                    seterrorProfile("Already created employee using this email.");
                }
            })
        }
    }

    return (
        <>
            <AdminSidebar/>
            <div className="flex flex-col space-y-5">
                <div className="flex justify-center mx-10">
                    <form className="w-full p-8 mt-10 mb-6 ml-64 bg-gray-500 bg-opacity-25 rounded shadow-inner md:w-1/2 sm:w-3/4" >
                        <h4 className="mb-8 text-3xl font-bold text-center text-maingreen">Edit Employee</h4>
                        {
                            errorProfile.length !== 0 ? (
                                <div className="px-3 mb-2 -mt-3 text-xl text-red-600">{errorProfile}</div>
                            ): null
                        }
                        <div className="flex flex-wrap mb-2">
                            <div className="w-full px-3 mb-6 space-y-2 md:w-1/2 md:mb-0">
                                <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-first-name" 
                                type="text" 
                                name="firstname"
                                placeholder="Eg: Theja"
                                value={firstName}
                                onChange={(e) => {
                                    setfirstName(e.target.value);
                                }}
                                required/>
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                    Last Name
                                </label>
                                <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-last-name" 
                                type="text"
                                name="lastname"
                                placeholder="Eg: Kumari"
                                value={lastName}
                                onChange={(e) => {
                                    setlastName(e.target.value);
                                }}
                                required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-2">
                            <div className="w-full px-3 space-y-2">
                                <label className="block text-lg font-semibold tracking-wide text-black" for="grid-address">
                                    Address
                                </label>
                                <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-address" 
                                type="text"
                                name="address"
                                placeholder="Eg: No.379, Temple Road, Galle"
                                value={address}
                                onChange={(e) => {
                                    setaddress(e.target.value);
                                }}
                                required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-2">
                            <div className="w-full px-3 mb-6 space-y-2 md:mb-0 md:w-1/2">
                                <label className="block text-lg font-semibold tracking-wide text-black" for="grid-first-name">
                                    Email
                                </label>
                                <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-first-name" 
                                type="text"
                                name="email"
                                placeholder="Eg: thejakuma@gmail.com"
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                                required/>
                                <div class="text-red-600 pl-1">{email_error}</div>
                            </div>
                            <div className="w-full px-3 space-y-2 md:w-1/2">
                                <label className="block text-lg font-semibold tracking-wide text-black" for="grid-last-name">
                                    Mobile
                                </label>
                                <input className="block w-full px-4 py-3 leading-tight text-black border-2 rounded outline-none hover:border-hovergreen focus:border-maingreen" id="grid-last-name" 
                                type="number"
                                name="mobile"
                                placeholder="Eg: 0775433332"
                                value={mobile}
                                onChange={(e) => {
                                    setmobile(e.target.value);
                                }}
                                required/>
                                <div class="text-red-600 pl-1">{mobile_error}</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center mt-6 -mb-6 space-x-8">
                        <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white rounded bg-maingreen hover:bg-hovergreen" onClick={editEmployee}>Submit</button>
                            <button className="justify-center w-40 p-4 px-4 py-2 mb-8 font-bold text-white bg-red-600 rounded hover:bg-lightred" onClick={getEmployee}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
    
}

export default AddEmployee;
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import JobTypeBtn from '../components/JobTypeBtn';
import EmployeeTable from '../components/EmployeeTable';
import Search from '../components/Search';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function ViewEmployee() {
    
    const [contacts, setContacts] = useState([]);
    const [active, setactive] = useState({
        active: "Moderators"
    });

    useEffect(() => {
        getEmployees(1);
    }, [])

    const retrieveContacts = async (userType) => {
        const res = await api.get(`/viewEmployees/${userType}`);
        return res.data;
    };

    const getEmployees = async (userType) => {
        const allContacts = await retrieveContacts(userType);
        if (allContacts) {
            setContacts(allContacts);
        };
    }
    
    return (
        <>
            <AdminSidebar/>
            <div className="w-10/12 h-full ml-44">
                <div className="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded" >
                    <h4 className="m-8 text-3xl font-bold text-center text-maingreen">All Employees</h4>
                    <div className="float-right mr-12">
                        <Search />
                    </div>
                    <Link to="/admin/addEmployee">
                        <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Employees + </button>
                    </Link>
                    
                    <div className="flex flex-wrap mx-5 mb-10 sm:justify-center gap-x-5 gap-y-5 md:gap-x-8">
                        <JobTypeBtn jobType="Moderators" userState={[active, setactive]} userType={1} contactEmployees={getEmployees} />
                        <JobTypeBtn jobType="Accountants" userState={[active, setactive]} userType={2} contactEmployees={getEmployees} />
                        <JobTypeBtn jobType="Delivery Persons" userState={[active, setactive]} userType={3} contactEmployees={getEmployees} />
                        <JobTypeBtn jobType="Workers" userState={[active, setactive]} userType={4} contactEmployees={getEmployees} />
                    </div>

                    { contacts.length !== 0 ? (
                    <div className="flex flex-col mt-2 mb-10 sm:mx-10">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-500 bg-opacity-25">
                                            <tr>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Name</th>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">NIC</th>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Address</th>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700">Mobile</th>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700"></th>
                                                <th className="px-6 py-3 text-lg font-semibold tracking-wider text-left text-gray-700"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                contacts.map((contact, index) => (
                                                    <EmployeeTable key={index} userState={[active, setactive]} getEmp={getEmployees} name={contact.first_name} email={contact.userProfile.email} nic={contact.nic} address={contact.address} mobile={contact.mobile} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                            There are no {active.active.toLowerCase()} in the company.
                        </h4> 
                    }
                </div>
            </div>
        </>
    );
}

export default ViewEmployee;
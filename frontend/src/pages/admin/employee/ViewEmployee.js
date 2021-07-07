import React, { useState } from 'react';
import { Link } from "react-router-dom";

import AddButton from '../components/AddButton';
import SearchBtn from '../components/SearchBtn';
import JobTypeBtn from '../components/JobTypeBtn';
import EmployeeTable from '../components/EmployeeTable';

const ViewEmployee = () => {
    const [showEmployees,setShowEmployees] = useState(false);
    
    return (
        <div className="flex flex-col justify-center m-12 gap-y-5 md:mx-40">
            <div className="flex justify-between">
                <Link to="/admin/addEmployee">
                    <AddButton btnValue="+ ADD EMPLOYEE" />
                </Link>
                <SearchBtn />
                {/* { showEmployees ? (
                    <SearchBtn />
                ): null } */}
            </div>
            
            <div className="flex flex-wrap mx-5 sm:justify-center gap-x-5 gap-y-5 md:gap-x-8">
                <JobTypeBtn jobType="Moderators" />
                <JobTypeBtn jobType="Accountants" />
                <JobTypeBtn jobType="Workers" />
                <JobTypeBtn jobType="Delivery Persons" />
                {/* <JobTypeBtn jobType="Moderators" viewEmployees={() => setShowEmployees(true)} />
                <JobTypeBtn jobType="Accountants" viewEmployees={() => setShowEmployees(true)} />
                <JobTypeBtn jobType="Delivery Persons" viewEmployees={() => setShowEmployees(true)} />
                <JobTypeBtn jobType="Workers" viewEmployees={() => setShowEmployees(true)} /> */}
            </div>
            
            {/* { showEmployees ? ( */}
            <div className="flex flex-col mt-5 sm:mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Name</th>
                                        <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">NIC</th>
                                        <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Address</th>
                                        <th className="px-6 py-3 text-lg font-bold tracking-wider text-left text-gray-700 uppercase">Mobile</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <EmployeeTable name="Sulakshanee Theja" email="sulakshanee@gmail.com" nic="977766551v" address="Sooriyawewa, Hambantota" mobile="0711234553" />
                                    <EmployeeTable name="Chathurika Perera" email="chathurika@gmail.com" nic="974618119v" address="No.265, Kurunagala" mobile="0715428643" />
                                    <EmployeeTable name="Hiruni Amarakoon" email="hiruni@gmail.com" nic="994161628v" address="Kuliyapitiya, Kurunagala" mobile="0715829347" />
                                    <EmployeeTable name="Piyumi Dulanjalee" email="piyumi@gmail.com" nic="984141094v" address="No.456, Matara" mobile="0772036782" />
                                    <EmployeeTable name="Hashan Chandima" email="hashan@gmail.com" nic="991643484v" address="No.89, Kurunagala" mobile="0769299923" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* ): null } */}
        </div>
    );
}

export default ViewEmployee;
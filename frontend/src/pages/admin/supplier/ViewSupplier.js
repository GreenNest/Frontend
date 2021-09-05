import React from 'react';
import { Link } from "react-router-dom";

// import AddButton from '../components/AddButton';
// import SearchBtn from '../components/SearchBtn';
import Search from '../components/Search';
import DetailsCard from '../components/DetailsCard';
import AdminSidebar from '../components/adminSidebar';

const ViewSupplier = () => {

    return (
        <>
        <AdminSidebar/>
        <div className="w-full ml-32">
        <div className="flex flex-col m-5 gap-y-5 md:mx-40">
            <div className="flex justify-between -mb-4">
                <Link to="/admin/addSupplier">
                    {/* <AddButton btnValue="+ ADD SUPPLIER" /> */}
                    <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Supplier + </button>
                </Link>
                {/* <SearchBtn /> */}
                <div className="float-right mr-12"><Search /></div>
            </div>
            <div className="flex flex-wrap justify-center gap-y-5 md:justify-around">
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
            </div>
        </div>
        </div>
        </>
    );
}

export default ViewSupplier;
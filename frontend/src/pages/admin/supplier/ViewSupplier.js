import React, { useState } from 'react';
import { Link } from "react-router-dom";

// import AddButton from '../components/AddButton';
// import SearchBtn from '../components/SearchBtn';
import Search from '../components/Search';
import DetailsCard from '../components/DetailsCard';

const ViewSupplier = () => {
    const [showAddSupplierPopup,setShowAddSupplierPopup] = useState(false);
    
    return (
        <div className="w-full ml-32">
        <div className="flex flex-col m-5 gap-y-5 md:mx-40">
            <div className="flex justify-between -mb-4">
                <Link to="/admin/addSupplier">
                    {/* <AddButton btnValue="+ ADD SUPPLIER" /> */}
                    <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold ml-12 mb-8 rounded py-2 px-4">Add Supplier + </button>
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
    );
}

export default ViewSupplier;
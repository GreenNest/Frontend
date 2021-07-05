import React, { useState } from 'react';
import { Link } from "react-router-dom";

import AddButton from '../components/AddButton';
import SearchBtn from '../components/SearchBtn';
import DetailsCard from '../components/DetailsCard';

const ViewSupplier = () => {
    const [showAddSupplierPopup,setShowAddSupplierPopup] = useState(false);
    
    return (
        <div className="flex flex-col m-12 gap-y-10 md:mx-36">
            <div className="flex justify-between">
                <Link to="/admin/addSupplier">
                    <AddButton btnValue="+ ADD SUPPLIER" />
                </Link>
                <SearchBtn />
            </div>
            <div className="flex flex-wrap justify-center gap-y-5 md:justify-around">
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
            </div>
        </div>
    );
}

export default ViewSupplier;
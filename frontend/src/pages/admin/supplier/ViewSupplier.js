import React, { useState } from 'react';

import AddButton from '../components/AddButton';
import SearchBtn from '../components/SearchBtn';
import DetailsCard from '../components/DetailsCard';

const ViewSupplier = () => {
    const [showAddSupplierPopup,setShowAddSupplierPopup] = useState(false);
    
    return (
        <div>
            <div className="w-3/4 pt-5 mx-auto my-10">
                <div className="flex justify-between w-5/6 m-auto">
                    <AddButton btnValue="+ ADD SUPPLIER" 
                    // viewPopup={() => setShowAddSupplierPopup(true)} 
                    />
                    <SearchBtn />
                </div>
                <div className="flex flex-row flex-wrap justify-between w-4/5 mx-auto mt-10 gap-y-5">
                    <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                    <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                    <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                    <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                    <DetailsCard name="Sulakshanee Theja" address="Thuru Plant Nursery, Kandy" mobile="071-1229957" email="sulakshanee@gmail.com" supplier="true" />
                </div>
            </div>
            {/* { showAddSupplierPopup ? (
                <AddSupplierPopup canclePopup={() => setShowAddSupplierPopup(false)} />
            ): null } */}
        </div>
    );
}

export default ViewSupplier;
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
// import AddButton from '../components/AddButton';
// import SearchBtn from '../components/SearchBtn';
import Search from '../components/Search';
import DetailsCard from '../components/DetailsCard';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function ViewSupplier () {

    const [contacts, setContacts] = useState([]);

    const retrieveContacts = async () => {
        const res = await api.get("/getSuppliers");
        return res.data;
    };

    const getSuppliers = async () => {
        const allContacts = await retrieveContacts();
        if (allContacts) {
            setContacts(allContacts);
        };
    }

    useEffect(() => {
        getSuppliers();
    }, [])

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

                    { contacts.length !== 0 ? (
                        <div className="flex flex-wrap justify-center gap-y-5 md:justify-around">
                            {
                                contacts.map((contact, index) => (
                                    <DetailsCard key={index} getSup={getSuppliers} first_name={contact.first_name} last_name={contact.last_name} address={contact.address} mobile={contact.mobile} email={contact.email} id={contact.id} categories={contact.categories} />
                                ))
                            }
                        </div>
                    ):  <h4 className="m-auto mt-10 text-xl font-medium">
                            There are no Suppliers joing with the company.
                        </h4> 
                    }
                </div>
            </div>
        </>
    );
}

export default ViewSupplier;
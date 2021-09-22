import React, {useState, useEffect} from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import Search from '../components/Search';
import DetailsCard from '../components/DetailsCard';
import AdminSidebar from '../components/adminSidebar';
import api from '../../../axiosContact';

function ViewSupplier () {

    const [contacts, setContacts] = useState([]);
    var history = useHistory();

    useEffect(() => {
        checkValidate();
        getSuppliers();
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
    
    return (
        <>
            <AdminSidebar/>
            <div className="w-10/12 h-full ml-44">
                <div className="float-right w-5/6 mt-10 mb-8 mr-5 bg-gray-500 bg-opacity-25 rounded">
                    <h4 className="m-8 text-3xl font-bold text-center text-maingreen">All Suppliers</h4>
                    <div className="float-right mr-12">
                        <Search />
                    </div>
                    <Link to="/admin/addSupplier">
                        <button className="justify-center p-4 px-4 py-2 mb-8 ml-12 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Add Supplier + </button>
                    </Link>
                    
                    <div className="flex flex-wrap items-center mb-8">
                        { 
                            contacts.length !== 0 ? (
                                <div className="flex flex-wrap justify-center gap-y-5 md:justify-around">
                                    {
                                        contacts.map((contact, index) => (
                                            <DetailsCard key={index} getSup={getSuppliers} first_name={contact.first_name} last_name={contact.last_name} address={contact.address} mobile={contact.mobile} email={contact.email} id={contact.id} categories={contact.categories} />
                                        ))
                                    }
                                </div>
                            ):  <h4 className="m-auto mt-10 mb-10 text-2xl font-medium text-center text-red-500">
                                    There are no Suppliers joing with the company.
                                </h4> 
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewSupplier;
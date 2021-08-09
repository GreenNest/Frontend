import React from 'react';
import { useEffect, useState } from "react";
import Category from './Category';
import { useHistory } from "react-router-dom";
import Productlist from './Productlist';
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import CustomerService from '../../../services/CustomerService';


function Shop() {
    var history = useHistory();
    const [logstate, setLogstate] = useState(false);
    const [header, setHeader] = useState(0);

    const x = JSON.parse(localStorage.getItem('authorization'));

    useEffect(async () => {
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    }, [])

    return ( 
        <>
        {/* <Header isLog={logstate}/> */}
        {header}
        <div className="flex flex-row h-full bg-gray-100">
            <div className="flex-col flex-initial visible w-screen md:w-1/6 md:visible">
                <Category />
            </div>

            <div className="box-border flex flex-col w-5/6 mb-10">
                <Productlist />               
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Shop;



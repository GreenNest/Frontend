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

    useEffect(async () => {
        if(sessionStorage.getItem("token") != null){
            console.log(sessionStorage.getItem("token"));
            let loinState = {
                cipher: sessionStorage.getItem("token")
            }
            CustomerService.checkUserLogin(loinState).then((result) => {
                console.log(result);
                if(result.data.loginState == 1){    
                    setHeader(<SignedHeader/>)
                }else{
                    setHeader(<Header/>)
                }
            });
        }else{
            setHeader(<Header/>)
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



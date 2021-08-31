import React from 'react';
import { useEffect, useState } from "react";
import Category from './Category';
import { useHistory } from "react-router-dom";
import Productlist from './Productlist';
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import CustomerService from '../../../services/CustomerService';
import axios from 'axios';


function Shop() {
    var history = useHistory();
    const [logstate, setLogstate] = useState(false);
    const [header, setHeader] = useState(0);

    const x = JSON.parse(localStorage.getItem('authorization'));
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]); 

    useEffect(async () => {
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
        axios.get("http://localhost:8080/api/v1/get/categories").then((response) => {
      console.log(response.data)
      setData(response.data.data)
      console.log(data[0])
    }).catch((err) => {
      console.log(err.response);
    })
    }, [])

    return ( 
        <>
        {header}
        <div className="flex flex-row h-full bg-gray-100">
            <div className="flex-col flex-initial visible w-screen md:w-1/6 md:visible">
                <Category posts={data}/>
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



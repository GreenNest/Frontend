import React, { useState, useEffect } from 'react';
import Barchart from './charts/Barchart';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import AccountantSidebar from './accountant/dashboard/components/accountantSidebar';
import CustomerService from '../services/CustomerService';
import ModeratorSidebar from './moderator/components/moderatorSidebar';

function LeaveStat(){
    const [data, setData] = useState([]);
    const history = useHistory();
    const y = JSON.parse(localStorage.getItem('authorization')); 
    console.log(y);
    useEffect(() => {
        checkValidate();
    }, [])

    const checkValidate = async() => {
        const y = JSON.parse(localStorage.getItem('authorization')); 
        if(!y){
            <Redirect to='/login' />
        }else{
            if(y.roles[0] == "admin" || y.roles[0] == "customer"){
                history.push("/error");
            }
            
        }
    }

    return (
        <>
        <ModeratorSidebar/>
        <div className="relative z-50 w-9/12 p-3 mt-20 mb-20 bg-white shadow-xl ml-72">
            <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2"><Barchart/></div>
         </div>
        </>
    );
}


export default LeaveStat;
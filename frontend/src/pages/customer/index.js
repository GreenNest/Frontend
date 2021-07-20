import React, {Fragment} from 'react';
import { useState, useContext } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import '../../styles/style.css';
import Slide from './home/components/slide.js';
import Description from './home/components/Description';
import Featured from './home/components/Featured';
import { FaAngleRight} from "react-icons/fa";
import CustomerService from '../../services/CustomerService';
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';

function Index(props) {
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
                    console.log("you are log to the system");
                    setLogstate(true);
                    if(loinState){
                        setHeader(<SignedHeader/>) 
                    }
                    else{
                        setHeader(<Header/>) 
                    }
                }else{
                    setHeader(<Header/>)
                }
            });
        }else{
            setHeader(<Header/>) 
            console.log("you are not log to the system");
        }
    }, [])

    return (
        <>
        {header}
        <Fragment>
           <Slide/>
        </Fragment>
        <Description/>
        <Featured/>
        <Footer/>
        </>
    )
}

export default Index


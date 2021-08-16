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
    const session = localStorage.getItem('authorization');

    const x = JSON.parse(localStorage.getItem('authorization'));

    useEffect(async () => {
       if(!x){
           console.log("please login");
           setHeader(<Header/>)
       }else{
           console.log("you are log");
           setHeader(<SignedHeader/>)
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


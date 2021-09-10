import React, {Fragment} from 'react';
import { useState, useContext } from "react";
import { useEffect } from "react";
import '../../styles/style.css';
import Slide from './home/components/slide.js';
import Description from './home/components/Description';
import Featured from './home/components/Featured';
import { FaAngleRight} from "react-icons/fa";
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';
import api from '../../axiosContact';

function Index(props) {
    const [logstate, setLogstate] = useState(false);
    const [header, setHeader] = useState(0);

    useEffect(() => {
      getHeader();
    }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    }

    return (
        <>
        {header}
        <Fragment>
           <Slide/>
        </Fragment>
        <Description/>
        <Featured />
        <Footer/>
        </>
    )
}

export default Index


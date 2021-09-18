import React, {Fragment} from 'react';
import { useState } from "react";
import { useEffect } from "react";
import '../../styles/style.css';
import Slide from './home/components/slide.js';
import Description from './home/components/Description';
import Featured from './home/components/Featured';
import Header from '../../components/Header';
import SignedHeader from '../../components/SignedHeader';
import Footer from '../../components/Footer';

function Index(props) {
    // const [logstate, setLogstate] = useState(false);
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


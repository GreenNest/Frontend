import React, {Fragment} from 'react';
import '../../styles/style.css';
import Slide from './home/components/slide.js';
import Description from './home/components/Description';
import Featured from './home/components/Featured';
import { FaAngleRight} from "react-icons/fa";

function Index() {
    return (
        <>
        <Fragment>
           <Slide/>
        </Fragment>
        <Description/>
        <Featured/>
        </>
    )
}

export default Index


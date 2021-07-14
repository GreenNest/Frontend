import React from 'react';
import Category from './Category';
import Productlist from './Productlist';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


const Shop = () => {
    return ( 
        <>
        <Header/>
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



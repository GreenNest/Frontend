import React from 'react';
import Category from './Category';
import Productlist from './Productlist';


const Shop = () => {
    return ( 
        <div className="flex flex-row h-full">
            <div className="flex-initial flex-col w-screen md:w-1/6 py-5 bg-gray-100 visible md:visible">
                <Category />
            </div>

            <div className="flex flex-col w-5/6  py-5 box-border bg-gray-100">
                <Productlist />               
            </div>
        </div>
     );
}
 
export default Shop;



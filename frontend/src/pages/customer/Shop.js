import React from 'react';
import Category from '../../components/Category';
import Productlist from '../../components/Productlist';


const Shop = () => {
    return ( 
        <div className="flex flex-row h-full">
            <div className="flex-initial  flex-col w-1/4 py-5 px-3 bg-gray-100">
                <Category />
            </div>

            <div className="flex flex-col w-3/4  py-5 px-3 box-border bg-gray-100">
                <Productlist />               
            </div>
        </div>
     );
}
 
export default Shop;



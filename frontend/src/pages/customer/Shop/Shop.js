import React from 'react';
import Category from './Category';
import Productlist from './Productlist';


const Shop = () => {
    return ( 
        <div className="flex flex-row h-full bg-gray-100">
            <div className="flex-col flex-initial visible w-screen md:w-1/6 md:visible">
                <Category />
            </div>

            <div className="box-border flex flex-col w-5/6 mb-10">
                <Productlist />               
            </div>
        </div>
     );
}
 
export default Shop;



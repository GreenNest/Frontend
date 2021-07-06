import React from 'react'
import Productcard from './Productcard';
import product_data from "./productdata";



function Productlist (){
    return (
        <div className="main">         
         <h3 className="my-24 mx-12 justify-center items-center text-2xl sm:text-5xl font-bold  text-opacity-50" >Indoor Plants</h3>      
           <div className=" relative mr-4 box-border cursor-pointer">
                <div className="grid md:grid-cols-4">
                    {product_data.map((item) => (
                    <div 
                    key={item.id}
                    >
                    <Productcard 
                    id={item.id} 
                    thumb={item.thumb} 
                    product_name={item.product_name}
                    price={item.price}
                    currency={item.currency} 
                    description={item.description}
                    />
                    </div>
                ))}
                    
                </div>
            
            </div>      
         </div>
       
    )

}

export default Productlist;

// const Productlist = () => {
//     console.log(product_card);
//     const listitems = product_card.map((item) =>
          
//     );

//     return ( 
//         
//      );
// }
 
// export default Productlist;
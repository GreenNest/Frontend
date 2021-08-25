import React from 'react'
import Productcard from './Productcard';
import product_data from "./productdata";

function Productlist (props){
    console.log(props.hero);
    return (
        <div className="mr-5 main">         
         <h3 className="items-center justify-center mx-12 mt-10 mb-4 text-2xl font-bold sm:text-5xl text-maingreen" >Fruit Plants</h3>      
           <div className="box-border relative mr-4 cursor-pointer">
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
Productlist.defaultProps={
    hero:"defaultHero"
};

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
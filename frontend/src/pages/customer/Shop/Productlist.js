import React, { useEffect, useState } from 'react'
import Productcard from './Productcard';
import product_data from "./productdata";
import axios from 'axios';

function Productlist (props){
    //console.log(props.hero);
    const [data, setData] = useState([]);
    const name = "Indoor plants"

    useEffect(async() => {
       axios.get("http://localhost:8080/api/v1/product/" +name).then((response) => {
           //console.log(response.data.data);
           setData(response.data.data);
       })
    }, [])


    return (
        <div className="mr-5 main">         
         <h3 className="items-center justify-center mx-12 mt-10 mb-4 text-2xl font-bold sm:text-5xl text-maingreen" >Fruit Plants</h3>      
           <div className="box-border relative mr-4 cursor-pointer">
                <div className="grid md:grid-cols-4">
                    {data.map((item) => (
                    <div 
                    key={item.id}
                    >
                    <Productcard 
                    id={item.id}
                    product_name={item.name}
                    price={item.price}
                    description={item.description}
                    image={"data:image/jpeg;base64," +item.mainImage}
                    />
                    </div>
                ))}
                    
                </div>
            
            </div>      
         </div>
       
    )

}
// Productlist.defaultProps={
//     hero:"defaultHero"
// };

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
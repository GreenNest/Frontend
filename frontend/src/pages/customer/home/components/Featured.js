import React, { useState, useEffect } from 'react';
import image1 from '../../../../assets/product_img/mango1.jpg';
import image2 from '../../../../assets/product_img/rose.jpg';
import image3 from '../../../../assets/product_img/coconut.jpg';
import image4 from '../../../../assets/product_img/baby.jpg';
import Card from './Card.js';
import axios from 'axios';

function Featured() {
   const [image, setImage] = useState(null);
   const [data, setData] = useState([]); 
   const [isloading, setIsloading] = useState(true);

    useEffect(async () => {
        axios.get("http://localhost:8080/api/v1/get/featured/true").then((response) => {
            //console.log(response.data);
            setData(response.data)
        }).then(setIsloading(false));
        
    }, [])

   
    
    return (
        <div class="grid h-auto lg:grid-cols-feature md:grid-cols-feature gap-10 md:mr-24 md:ml-24 md:mb-16 mr-8 ml-8 mb-4 grid-cols-feature2">
    
           {
            data.map((item) => 
                //  <h3 keyy={item.id}>{item.name}</h3>
                 <Card key={item.id} image={"data:image/jpeg;base64," +item.mainImage} title={item.name} price={item.price} stock={item.amount} value={item.id}/> 
            )
 
           }
           {/* <Card image={image2} title="Beach Rose Plant" price="350LKR" stock="50 in stock"/> */}
        </div>
    );
}


export default Featured;

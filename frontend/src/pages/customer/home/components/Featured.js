import React, { Component } from 'react';
import image1 from '../../../../assets/product_img/mango1.jpg';
import image2 from '../../../../assets/product_img/rose.jpg';
import image3 from '../../../../assets/product_img/coconut.jpg';
import image4 from '../../../../assets/product_img/baby.jpg';
import Card from './Card.js';

class Featured extends Component {
    render() {
        return (
            <div class="h-auto grid lg:grid-cols-feature md:grid-cols-feature gap-10 md:mr-24 md:ml-24 md:mb-16 mr-8 ml-8 mb-4 grid-cols-feature2">
              <Card image={image1} title="Mango Plant" price="150LKR" stock="60 in stock"/>
              <Card image={image2} title="Beach Rose Plant" price="350LKR" stock="50 in stock"/>
              <Card image={image3} title="Coconut Plant" price="200LKR" stock="100 in stock"/>
              <Card image={image4} title="Baby Anturium Plant" price="1500LKR" stock="40 in stock"/>
            </div>
        );
    }
}

export default Featured;

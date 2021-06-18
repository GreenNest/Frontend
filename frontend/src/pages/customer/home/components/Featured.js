import React, { Component } from 'react';
import image1 from '../../../../assets/banner4.jpg';
import image2 from '../../../../assets/banner3.jpg';
import image3 from '../../../../assets/banner2.jpg';
import image4 from '../../../../assets/banner1.jpg';
import Card from './Card.js';

class Featured extends Component {
    render() {
        return (
            <div class="h-auto grid grid-cols-feature gap-10 mr-36 ml-36 mb-16">
              <Card image={image1} title="Mango Plant" price="500LKR"/>
              <Card image={image2} title="Rose Plant" price="200LKR"/>
              <Card image={image3} title="Coconut Plant" price="100LKR"/>
              <Card image={image4} title="Avacado Plant" price="500LKR"/>
            </div>
        );
    }
}

export default Featured;

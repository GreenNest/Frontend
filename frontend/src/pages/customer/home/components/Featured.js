import React, { Component } from 'react';

class Featured extends Component {
    render() {
        return (
            <div class="h-auto grid grid-cols-feature gap-5 mr-16 ml-16 mb-16">
              <div class="border border-solid rounded-md h-x bg-white shadow-md">1</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">2</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">3</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">4</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">4</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">4</div>
              <div class="border border-solid rounded-md h-x bg-white shadow-md">4</div>
            </div>
        );
    }
}

export default Featured;

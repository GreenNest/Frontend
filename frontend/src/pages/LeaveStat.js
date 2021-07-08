import React, { Component } from 'react';
import Barchart from './charts/Barchart';

class LeaveStat extends Component {
    
    render() {
        return (
            <div className="relative z-50 w-10/12 p-3 mt-20 mb-20 bg-white shadow-xl ml-36">

                <div class="w-full h-full p-7 rounded-md shadow-lg border-solid border-2"><Barchart/></div>


            </div>
        );
    }
}

export default LeaveStat;
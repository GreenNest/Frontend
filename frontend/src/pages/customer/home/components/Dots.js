import React from 'react';
import Context from './Context.js';
//className="all-dots"
function Dots(props) {
    return (
        <div class="w-full h-16 absolute flex justify-center top-90 z-200"> 
           {Context.map((slide, index) => (
               <span 
                   key={index}
                   className = {`${
                       props.activeIndex === index ? "dot active-dot" : "dot"
                   }`}
                   onClick = {(event) => props.onclick((event.target.value = index))}
                  ></span>
           ))}
            
        </div>
    )
}

export default Dots

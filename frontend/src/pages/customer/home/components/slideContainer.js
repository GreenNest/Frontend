import React from 'react';
import Context from './Context';

function SlideContainer(props) {
    return (
        <div>
          {Context.map((slide, index) => (
              <div 
               key={index}
               className={index === props.activeIndex ? "slides active" : "inactive"}
              >
              <img class="w-full h-im absolute object-cover" src={slide.url} alt="" />
              </div>
          ))}
        </div>
    );
}

export default SlideContainer



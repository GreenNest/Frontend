// import React from 'react';
// import '../../../../styles/style.css';

// function slide(props) {
//     return (
//         <div className="defaultHero" id={props.id}>
//            <img src={props.picture} className="single-slide"/>   
//         </div>
//     )
// }

// export default slide
import React, {useState} from 'react';
import Arrow from './Arrows.js';
import Dots from './Dots.js';
import Context from './Context.js';
import SlideContainer from './slideContainer.js';
const len = Context.length -1 ;

function Slide() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div class="max-h-im w-full relative m-auto overflow-hidden">
        <SlideContainer activeIndex={activeIndex}/>
        <Arrow 
           prevSlide = {() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
           nextSlide = {() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        
        />
        <Dots
          activeIndex = {activeIndex}
          onclick = {(activeIndex) => setActiveIndex(activeIndex)}
         
         />
            
        </div>
    )
}

export default Slide


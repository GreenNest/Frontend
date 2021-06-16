import React from 'react';
import { FaAngleRight, FaAngleLeft} from "react-icons/fa";

function Arrows(props) {
    return (
        <div className="arrow">
        <FaAngleLeft class="cursor-pointer z-100 absolute top-50 text-8xl h-24 w-12 p-4 -mt-12 font-bold rounded-tr-md rounded-br-md transition duration-0.5 ease-in hover:bg-hovercolor hover:text-mainyellow" onClick={props.prevSlide}/>
        <FaAngleRight class="cursor-pointer z-100 absolute top-50 text-8xl h-24 w-12 p-4 -mt-12 font-bold rounded-tl-md rounded-bl-md transition duration-0.5 ease-in right-0 hover:bg-hovercolor hover:text-mainyellow" onClick={props.nextSlide}/>
        </div>
    )
}

export default Arrows

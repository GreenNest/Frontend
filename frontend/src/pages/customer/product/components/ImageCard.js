import React from 'react';
function ImageCard(props){
    return (
        <img className="w-32 h-auto" src={props.img1} alt="sub image"/>
    );
}

export default ImageCard;
import React from 'react';
// import { NavLink, Link } from "react-router-dom";
// import axios from 'axios';
// import '../../../styles/style.css';

function Category(props) {
  // const [categories, setCategories] = useState([]);
  // const [data, setData] = useState([]); 

    return (
      <div type="button" 
        className={
          props.type === props.categoryState[0].active ? "box-border flex-row py-2 my-3 font-bold cursor-pointer text-redcolor" : "box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen list-none" }
          onClick = {() => {
            props.categoryState[1]({active: props.type});
            props.productDetails(props.type)
            
          }}
          >{props.type}</div> 
       
      );
}
 
export default Category;
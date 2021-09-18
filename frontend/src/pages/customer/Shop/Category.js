import React from 'react';
// import { NavLink, Link } from "react-router-dom";
// import axios from 'axios';
// import '../../../styles/style.css';

function Category(props) {
  // const [categories, setCategories] = useState([]);
  // const [data, setData] = useState([]); 

    return (

//         <div className="w-10/12 h-screen md:mt-28 mt-24 ml-12">
//            <div className="mb-24 text-lg  sm:text-l lg:text-xl md:text-2xl font-semibold">Product Categories</div>
//            <div className="text-sm sm:text-lg font-base mb-20 flex-row divide-y-2 divide-gray-300 w-8/12">
//                 <div className="my-3 box-border flex-row py-2  text-redcolor font-bold">Indoor Plants</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Seeds</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Budded Plants</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Fruit Plants</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Vegitabel Plants</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Plastic Pots</div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Bags</div>
//                 {/* <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer"></div>
//                 <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div> */}
//            </div>
//         </div>

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
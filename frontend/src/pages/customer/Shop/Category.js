import React, { useEffect, useState}  from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
import '../../../styles/style.css';

function Category(props) {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]); 

  const content = props.posts.map((post) =>
    <NavLink to="/" exact activeClassName="active" key={post}>
      <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">{post}</div>
    </NavLink>
  );

    return (
        <div className="w-10/12 h-screen mt-5 ml-10 md:mt-16">
           <div className="mb-5 text-lg font-semibold sm:text-l lg:text-xl md:text-2xl">Product Categories</div>
           <div className="flex flex-col w-9/12 mb-20 text-sm divide-y-2 divide-gray-300 sm:text-lg font-base">
              <NavLink to="/shop/fruits" exact activeClassName="selected">
                <li className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen list-none">Flowers</li>
              </NavLink>
              <NavLink to="/shop/indoor" exact activeClassName="selected">
                <li className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen list-none">Fruits</li>
              </NavLink>
                {content}
                {/* <div className="box-border flex-row py-2 font-bold text-redcolor">Fruit Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Flower Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Food Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Forest Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Herbal Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Indoor Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Outdoor Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Small Plants</div>
                <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Table Plants</div> */}
           </div>
        </div>
      );
}
 
export default Category;
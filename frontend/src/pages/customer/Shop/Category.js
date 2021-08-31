import React, { useEffect, useState}  from 'react';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';

function Category(props) {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]); 

  const content = props.posts.map((post) =>
    // <div key={post.category_id}>
    //   <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">{post.category_name}</div>
    // </div>
    <NavLink to="/" exact activeClassName="active" key={post.category_id}>
                    {/* Home */}
                  <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">{post.category_name}</div>
              </NavLink>
  );

    return (
        <div className="w-10/12 h-screen mt-5 ml-10 md:mt-16">
           <div className="mb-5 text-lg font-semibold sm:text-l lg:text-xl md:text-2xl">Product Categories</div>
           <div className="flex-row w-9/12 mb-20 text-sm divide-y-2 divide-gray-300 sm:text-lg font-base">
              <NavLink to="/" exact activeClassName="active">
                    {/* Home */}
                  <div className="box-border flex-row py-2 my-3 font-bold cursor-pointer text-maingreen">Flowers</div>
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
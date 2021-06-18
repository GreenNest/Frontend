import React from 'react'
import product_card from "./productdata";

const Productlist = () => {
    console.log(product_card);
    const listitems = product_card.map((item) =>
          <div className="w-1/4 h-64 flex justify-center items-center flex-col relative mb-36 ml-12 mt-6 pb-20 bg-gray-50 transition-all duration-75 ease-in-out transform scale-100 shadow-xl hover:bg-secondarygreen hover:scale-110 hover:cursor-pointer" key={item.id}>             
              <div className="mt-10">
                  <img className="w-44 h-44" src={item.thumb} />
              </div>
              <div className="flex justify-center items-center flex-col m-8 text-green-800">
                  <h2 className="text-xl font-semibold">{item.product_name}</h2>
                  <p className="text-base items-center">{item.description}</p>
                  <p className="text-base items-center text-blue-900 font-bold">{item.price}<span>{item.currency}</span></p>
                  <div className="w-24 p-1 bg-mainyellow text-sm flex justify-center cursor-pointer items-center text-center relative rounded-2xl transition-colors duration-75 ease-out hover:bg-yellow-500 hover:text-gray-50">Add to cart</div>
              </div>
          </div>
    );

    return ( 
        <div className="main">
           <h3 className="my-24 mx-36 justify-center items-center text-4xl font-bold  text-opacity-50 " >Indoor Plants</h3>
            <div className="flex items-center relative  w-11/12  my-3 mx-12 p-4 box-border justify-between flex-wrap">
              {listitems}
            </div>
           
        </div>
     );
}
 
export default Productlist;
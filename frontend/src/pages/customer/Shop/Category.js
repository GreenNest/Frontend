import React from 'react'


const Category = () => {

    return (
        <div className="w-10/12 h-screen md:mt-28 mt-24 ml-12">
           <div className="mb-24 text-lg  sm:text-l lg:text-xl md:text-2xl font-semibold">Product Categories</div>
           <div className="text-sm sm:text-lg font-base mb-20 flex-row divide-y-2 divide-gray-300 w-8/12">
                <div className="my-3 box-border flex-row py-2  text-redcolor font-bold">Indoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
                <div className="my-3 box-border flex-row py-2 text-maingreen font-bold cursor-pointer">Outdoor Plants</div>
           </div>
        </div>
      );
}
 
export default Category;
import React from 'react';
import { useEffect, useState } from "react";
import Category from './Category';
import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import api from '../../../axiosContact';
import Productcard from './Productcard';

function Shop() {
    // var history = useHistory();
    // const [logstate, setLogstate] = useState(false);
    const [header, setHeader] = useState(0);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]); 
    const [ active, setActive] = useState({
        active: ''
    });
    // const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        getHeader();
        getCategory();
        getProductList(categories[0]);

    }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            setHeader(<Header/>)
        }else{
            setHeader(<SignedHeader/>)
        }
    }

    const getCategory = async () => {
        const res = await api.get(`/get/categories`).then((response) => {
            console.log(response.data.data);
            if(response.data.data != null){
               setCategories(response.data.data);
               setActive({active: categories[0]})
            }
        })
    };

    const getProductList = async(categoryType) => {
        const allcategories = await api.get(`/product/${categoryType}`);
        if(allcategories.data.data != null){
            setData(allcategories.data.data);
        }
    };


    return ( 
        <>
        {header}
        <div className="flex flex-row h-full bg-gray-100">
            <div className="flex-col flex-initial visible w-screen md:w-1/6 md:visible">
                <div className="w-10/12 h-screen mt-5 ml-10 md:mt-16">
                    <div className="mb-5 text-lg font-semibold sm:text-l lg:text-xl md:text-2xl">Product Categories</div>
                    <div className="flex flex-col w-9/12 mb-20 text-sm divide-y-2 divide-gray-300 sm:text-lg font-base">
                         { categories.length !== 0 ? (
                            categories.map((item) => 
                                <Category key={item} type={item} categoryState={[active, setActive]} productDetails={getProductList}/>
                            )
                         ): <div>Loading...</div>}
                    </div>
                </div>
                {/* <Category posts={data}/> */}
            </div>
            <div className="box-border flex flex-col w-5/6 mb-10">
            {
                data.length !== 0 ? (
                    <div className="mr-5 main">         
                        <h3 className="items-center justify-center mx-12 mt-10 mb-4 text-2xl font-bold sm:text-5xl text-maingreen" ></h3>      
                        <div className="box-border relative mr-4 cursor-pointer">
                            <div className="grid md:grid-cols-4">
                                {
                                    data.map((item) => (
                                        <div key={item.id}>
                                        <Productcard 
                                            id={item.id}
                                            product_name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            image={"data:image/jpeg;base64," +item.mainImage}/>
                                        </div>
                                    ))
                                }
                    
                            </div>
            
                        </div>      
                    </div>
                ) : <h4 className="m-auto mt-10 text-xl font-medium">
                        Loading...
                    </h4>
            }
            {/* {data.length != 0 ?
                ( <Productlist type={data}/> ) :
                <h4 className="m-auto mt-10 text-xl font-medium">
                        There are no products related to this category.
                    </h4>}                    
            </div> */}
            </div>
        </div>
        <Footer/>
        </>
    );
}
 
export default Shop;



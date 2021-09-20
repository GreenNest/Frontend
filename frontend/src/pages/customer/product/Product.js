import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams, Redirect } from 'react-router-dom';
import CustomerService from '../../../services/CustomerService';
import api from '../../../axiosContact';

import Review from './components/Review';
import RequestPopup from './RequestPopup';
import Productlist from '../Shop/Productlist';
import ImageCard from './components/ImageCard';
import StarRating from './components/StarRating';

import customer3 from '../../../assets/customer_img/customer3.jpg';
import customer2 from '../../../assets/customer_img/customer2.jpg'
import customer4 from '../../../assets/customer_img/customer4.jpg'

import Header from '../../../components/Header';
import SignedHeader from '../../../components/SignedHeader';
import Footer from '../../../components/Footer';
import Featured from '../home/components/Featured';

function Product() { 
    var history = useHistory();
    const [showRequestPopup,setShowRequestPopup] = useState(false);
    const [model2,setModel2] =useState(false);
    const [header, setHeader] = useState(0);
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [number, setNumber] = useState(0);
    const [isloading, setIsloading] = useState(true);
    const [stock, setStock] = useState(0);
    const[message, setMessage] = useState('');
    const [reviewsData, setReviewsData] = useState([]);
    const x = JSON.parse(localStorage.getItem('authorization'));
    const {id} = useParams();
    const [category, setCategory] = useState([]);

    useEffect(async () => {
        getHeader();
        getProductDetails();
        productRivews();

    }, [])

    const getHeader = async() => {
        const x = JSON.parse(localStorage.getItem('authorization'));
        if(!x){
            <Redirect to='/login' />
            setHeader(<Header/>)
            
        }else{
            if(!x.roles.includes("customer")){
                history.push("/error");
            }
            setHeader(<SignedHeader/>)
        }
    }

    const getProductDetails = async() => {        
        CustomerService.getSingleProduct(id).then((response) => {
            if(response.data.status == 200){
               setData(response.data.data);
               setImages(response.data.data.subImages);
               setCategory(response.data.data.categories);
            }
        }).catch((err) => {
            //console.log(err.response.status);
            if(err.response.status == 401){
                history.push("/login");
            }
        })
        
    }

    const productRivews = async() => {

        CustomerService.getProductRivews(id).then((res) => {
            if(res.data.data != null){
                setReviewsData(res.data.data);
            }
        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }
        })
    }

    const togglecomplain = () => {
        setModel2(!model2)
    }

    const updateStock = async(newStock) => {
        CustomerService.updateStockAmount(newStock, id).then((res) => {

        }).catch((err) => {
            if(err.response.status == 401){
                history.push("/login");
            }
        })
        // const res = await api.put(`/product/update/${id}/${newStock}`);
    }


    const addToCart = () => {
        let price = stock * data.price;
        if(stock){

            if(stock > data.amount){
                setMessage("Invalid amount");
            }else{
                let cart = {
                    quantity: parseInt(stock),
                    totalPrice: price,
                    product:{
                        product_id: parseInt(id)
                    },
                    customer:{
                        customer_id: parseInt(x.id)
                   }
                }
                console.log(cart);
                CustomerService.addToCart(cart).then((response) => {
                    setMessage(response.data.message);
                }).catch((err) => {
                    if(err.response.status == 401){
                         history.push("/login");
                    }
                })
                updateStock(data.amount - parseInt(stock));
            }
            
        }else{
            setMessage("Please select the amount");
        }
    }

    const categoryContent = category.map((item) =>
        <a key={item}>{item},</a>
    );


    return (
        <>
        {header}
        <div className="min-w-full p-4 sm:pt-24 md:px-28">
            <div className="shadow-xl flex flex-col rounded-xl h-screen w-full">
                <div className="flex flex-row h-2/3 w-full">
                    <img className="w-2/5" src={"data:image/jpeg;base64," +data.mainImage} alt="Main Image"/>
                    <div className="sm:mt-5 mx-5 md:ml-10">
                        <h1 className="font-sans text-4xl font-bold">{data.name}</h1>
                        <p className="mt-3 text-2xl font-semibold text-red-500 font-moon">{data.price} LKR</p>
                        <StarRating />
                        <div className="mt-5 text-lg font-normal">
                            <div>- FREE Delivery (Kurunagala District only)</div>
                            <div>- Payment Methods: Cash on Delivery/ Online Payement</div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-secondarygreen">{data.amount} in stock</p>
                            <div className="text-red-500 text-sm">{message}</div>
                            <div className="flex flex-col flex-wrap mt-5 xl:flex-row w-full">
                                <div className="mr-3">
                                    <input className="w-12 h-12 p-1 text-20 text-center border rounded outline-none" placeholder="1"
                                        type="number"
                                        name="stock"
                                        value={stock}
                                        onChange={e => setStock(e.target.value)}/>
                                </div>
                                <div className="flex mt-5 gap-x-3 sm:mt-0 md:gap-x-0 sm:gap-x-0">
                                    {/* <Link to="/cart" type="button" className="p-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none">ADD TO CART</Link> */}
                                    <button className="p-2 font-bold text-white rounded bg-maingreen hover:bg-secondarygreen sm:ml-2 lg:ml-4 focus:outline-none" onClick={addToCart}>ADD TO CART</button>
                                    {/* <Link to="/checkout" type="button" className="p-2 font-bold text-white rounded bg-redcolor sm:ml-2 lg:ml-4 focus:outline-none hover:bg-lightred flex justify-center items-center">BUY NOW</Link> */}
                                    <button className="p-2 font-bold text-white rounded cursor-pointer bg-redcolor hover:bg-lightred sm:ml-2 lg:ml-4 focus:outline-none" onClick={togglecomplain}>REQUEST ORDER</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 border-t-2 border-gray-300 md:mt-6 w-full">
                            <div className="mt-3">
                                <span className="font-medium text-md">CATEGORIES: </span>
                                {categoryContent}
                            </div>
                            <div className="mt-3">
                                <span className="font-medium text-md">Description: {data.description}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-row flex-wrap mt-3 justify-start h-full items-center border-t-2 border-b-2 border-gray-300 gap-x-8">
                    <ImageCard img1={"data:image/jpeg;base64," +images[0]} />
                    <ImageCard img1={"data:image/jpeg;base64," +images[1]} />
                    <ImageCard img1={"data:image/jpeg;base64," +images[2]} />
                </div>
                
            </div>
            <div className="mt-16">
            <div className="text-4xl font-bold text-center text-black text-opacity-70">Item Reviews</div>
            { reviewsData.length != 0 ? ( reviewsData.map((item, id) => (
                <Review image={customer3} name={item.customerName} date={item.date.substring(0,10)} review={item.reviews} key={id}/>
            ))) : null
            }
             </div>
            
            <div className="mt-16">
                <div className="text-4xl font-bold text-center text-black text-opacity-70 mb-8">Related Products</div>
                <Featured />
            </div>

            { model2 ? 
                <RequestPopup canclePopup={() =>  setModel2(false)} categoryName={category} productName={data.name} productId={id}/>
            : null }
            {/* <div>
                {model2 &&
                    <RequestPopup />
                }
            </div> */}
        </div>
        <Footer/>
        </>
    );
}

export default Product;
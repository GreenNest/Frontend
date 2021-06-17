import img1 from './mango-tree.jpg'

const Product = () => {
    return (
        <div className="min-w-full bg-red-400 lg:p-36 md:min-w-0 sm:p-20">
            <div className="bg-blue-300 md:flex">
                <div className="lg:w-5/12 md:w-full">
                    <img className="rounded-xl" src={img1} alt="Main Image"/>
                    <div className="grid grid-cols-3 mt-12 justify-items-start">
                        <img className="w-32 h-auto" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto" src={img1} alt="Main Image"/>
                    </div>
                </div>
                <div className="lg:ml-10 sm:mt-10 sm:mx-5">
                    <h1 className="font-sans text-4xl font-bold">Red Mango Plant | F701</h1>
                    <p className="mt-3 text-2xl font-semibold font-moon">Rs. 3500.00</p>
                    <div className="mt-10 text-lg font-normal">
                        <p>- FREE Delivery (Kurunagala District only)</p>
                        <p>- Payment Methods : Cash on Delivery / Online Payement</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-lg font-semibold">30 in stock</p>
                        <form className="flex mt-5 justify-items-start">
                            <div>
                                <input type="number" className="w-10 h-10 text-2xl text-center rounded" value="1"/>
                            </div>
                            <button className="h-10 px-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 sm:ml-2 lg:ml-4">ADD TO CART</button>
                            <button className="h-10 px-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 sm:ml-2 lg:ml-4">BUY NOW</button>
                            <button className="h-10 px-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 sm:ml-2 lg:ml-4">REQUEST ORDER</button>
                        </form>
                    </div>
                    <div className="mt-16 border-t-2 border-fuchsia-600">
                        <div className="mt-3">
                            <span className="font-medium text-md">CATEGORIES: </span>
                            <a>Fruit Plants</a>,
                            <a>Outdoor Plants</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
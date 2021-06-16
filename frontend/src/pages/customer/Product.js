
import img1 from './mango-tree.jpg'

const Product = () => {
    return (
        <div className="min-w-full bg-red-400 p-36 md:min-w-0">
            <div className="bg-blue-300 md:flex">
                <div className="lg:w-5/12 md:w-full">
                    <img className="rounded-xl" src={img1} alt="Main Image"/>
                    <div className="flex mt-12">
                        <img className="w-32 h-auto mr-8" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto mr-8" src={img1} alt="Main Image"/>
                        <img className="w-32 h-auto mr-8" src={img1} alt="Main Image"/>
                    </div>
                </div>
                <div className="ml-10">
                    <h1 className="font-sans font-bold md:text-3xl lg:text-4xl">Red Mango Plant | F701</h1>
                    <p className="mt-3 text-2xl font-semibold font-moon">Rs. 3500.00</p>
                    <div className="mt-10 text-lg font-normal">
                        <p>FREE Delivery (Kurunagala District only)</p>
                        <p>Payment Methods : Cash on Delivery / Online Payement</p>
                    </div>
                    <div className="mt-16">
                        <p className="text-lg font-semibold">30 in stock</p>
                        <form className="mt-5">
                            <input type="number" className="w-10 h-10 text-2xl text-center" value="1" step="1" min="1"/>
                            <button>ADD TO CART</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
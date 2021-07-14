import React, { Component } from 'react';
import AdminSidebar from '../components/adminSidebar';

class AddStock extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }

    render() {
        return (
            <div>
            <AdminSidebar/>
            <div className="grid-container">
            {/* <div class="bg-maingreen"></div> */}
            <div className="main-area -mt-8 -ml-4">
               <div class="w-full m-16 bg-gray-500 bg-opacity-25 rounded ">
                  <form class="w-full justify-center p-4 flex flex-col items-center">
                        <div class=" text-maingreen font-bold text-2xl p-2 mb-4">Edit Item</div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="p-2 w-1/3 text-lg font-semibold">Category Name</label>
                                <select id = "dropdown" ref = {(input)=> this.menu = input} class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2">
                                    <option value="fruits">Fruits</option>
                                    <option value="flowers">Flowers</option>
                                    <option value="herbal">Flowers</option>
                                    <option value="vegetables">Vegetables</option>
                                </select>
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item ID</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Item Name</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item Details</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Main Image</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen h-24 block border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Other Images</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen h-24 block border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Price</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Item Quality</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                        </div>
                       <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 font-semibold">Reeorder Level</label>
                                <input class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 font-semibold">Featured</label>
                                <select id = "dropdown" ref = {(input)=> this.menu = input} class="w-1/2 outline-none text-sm rounded p-2 border-solid hover:border-hovergreen focus:border-maingreen border-2">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex w-full justify-center items-center mt-7 -mb-5">
                            {/* <div class=" w-1/3 p-3 bg-secondarygreen text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer mr-8">Submit</div> */}
                            <button className="bg-maingreen hover:bg-hovergreen p-4 justify-center text-white font-bold  mb-8 rounded py-2 px-4 w-40">Submit</button>
                            <button className="bg-red-600 hover:bg-lightred p-4 justify-center text-white font-bold ml-12 mb-8 rounded py-2 px-4 w-40">Cancel</button>
                            {/* <div class="w-1/3 p-3 bg-redcolor text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer">Cancel</div> */}
                        </div>
                  </form>
               </div>
            </div>
            </div>
            </div>
        );
    }
}

export default AddStock;


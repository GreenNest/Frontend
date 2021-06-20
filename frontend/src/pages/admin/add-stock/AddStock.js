import React, { Component } from 'react';
import Sidebar from '../../../components/Sidebar';

class AddStock extends Component {
    render() {
        return (
            <div className="container">
            <Sidebar/>
            <div className="main">
               <div class="w-full m-16 bg-white rounded-sm border-gray-400 border-solid border">
                  <form class="w-full justify-center p-4 flex flex-col items-center">
                        <div class=" text-50 font-bold text-lightgreen p-2 mb-4">Add Item</div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 ">Category Name</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 ">Item ID</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 ">Item Name</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 ">Item details</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 ">Main Image</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen h-24 block border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 ">Other Images</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen h-24 block border-2"  />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 ">Price</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 ">Item Quality</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                        </div>
                       <div class="grid grid-cols-2 w-full">
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class=" text-lg p-2 w-1/3 ">Preorder Level</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                            <div class="flex justify-start items-center p-1 mb-3 w-full">
                                <label class="text-lg p-2 w-1/3 ">Featured</label>
                                <input class="w-1/2 outline-none text-sm rounded-sm p-2 border-solid border-maingreen border-2"  />
                            </div>
                        </div>
                        <div class="flex w-full justify-center items-center">
                            <div class=" w-1/3 p-3 bg-secondarygreen text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer mr-8">Submit</div>
                            <div class="w-1/3 p-3 bg-redcolor text-mainyellow font-bold text-lg rounded-sm mt-5 mb-5 flex justify-center items-center cursor-pointer">Cancel</div>
                        </div>
                  </form>
               </div>
            </div>
            </div>
        );
    }
}

export default AddStock;


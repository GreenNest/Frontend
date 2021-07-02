import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (  
        <div>
            <div className="flex">
                <div className="bg-white p-4 rounded-l-lg "><FaSearch className="text-gray-300"/></div> 
                <input className="rounded-r-lg focus:border-none focus:outline-none p-4 w-72 h-12" placeholder="Search"/>
                 
            </div>
        </div>
    );
}
 
export default Search;
import React from 'react';

const Filterbtn = (props) => {
    return ( 
        <div>
            <button className="w-48 h-12 bg-maingreen text-blue-50 justify-center m-4 text-lg border-opacity-0 focus:outline-none rounded-lg"  >{props.Type}</button>
        </div>
     );
}
 
export default Filterbtn;
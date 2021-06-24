import "../../../styles/style.css";

const Dropdown = () => {
    return (
        <div className="relative inline-block mt-3 dropdown">
            <button type="button" className="inline-flex items-center justify-between px-3 py-1 font-medium text-black bg-white rounded w-36 focus:outline-none">
                <span className="mr-1">Job Types</span>
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>
            <ul class="absolute hidden text-gray-700 dropdown-menu w-36">
                <li className=""><a className="block p-1 whitespace-no-wrap bg-white border border-gray-100 rounded-t hover:bg-gray-400" href="#">Accountant</a></li>
                <li className=""><a className="block p-1 whitespace-no-wrap bg-white border border-gray-100 hover:bg-gray-400" href="#">Delivery Person</a></li>
                <li className=""><a className="block p-1 whitespace-no-wrap bg-white border border-gray-100 rounded-b hover:bg-gray-400" href="#">Moderator</a></li>
            </ul>
        </div>

    );
}

export default Dropdown;
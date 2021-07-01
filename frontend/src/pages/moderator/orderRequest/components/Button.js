
const Button = (props) => {
    return (
        <button type="button" className="flex-initial px-3 py-2 font-bold text-white bg-gray-200 rounded-md shadow-inner focus:outline-none focus:outline-non hover:bg-gray-300" style={{color:props.color ?? "white"}}>{props.btnName}</button>
    );
}

export default Button;
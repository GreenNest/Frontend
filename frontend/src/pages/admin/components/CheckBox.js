
const CheckBox = (props) => {
    return (
        <div>
            <label className="inline-flex items-center">
                <input type="checkbox" className="w-4 h-4" />
                <span className="ml-2 font-medium">{props.name}</span>
            </label>
        </div>
    );
}

export default CheckBox;

const AddButton = (props) => {
    return (
        <button type="button" className="flex-initial h-12 px-3 font-bold text-white rounded-md focus:outline-none bg-maingreen hover:bg-secondarygreen" onClick={props.viewPopup} >{props.btnValue}</button>
    );
}

export default AddButton;
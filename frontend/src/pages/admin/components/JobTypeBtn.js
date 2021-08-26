
function JobTypeBtn(props) {
    return (
        <button type="button" className="h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-hovergreen hover:bg-green-700" onClick={props.contactEmployees}>{props.jobType}</button>
    );
}

export default JobTypeBtn;
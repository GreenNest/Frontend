
const JobTypeBtn = (props) => {
    return (
        <button type="button" className="flex-initial px-3 py-2 font-bold text-white rounded-md shadow-inner focus:outline-none focus:outline-non hover:bg-secondarygreen bg-lightgreen" onClick={props.viewEmployees}>{props.jobType}</button>
    );
}

export default JobTypeBtn;
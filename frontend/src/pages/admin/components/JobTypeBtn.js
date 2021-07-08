
const JobTypeBtn = (props) => {
    return (
        <button type="button" className="h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-hovergreen" onClick={props.viewEmployees}>{props.jobType}</button>
    );
}

export default JobTypeBtn;
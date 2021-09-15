
function JobTypeBtn(props) {
    return (
        <button type="button"
            className={
                props.jobType === props.userState[0].active?"h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-green-700":"h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-hovergreen hover:bg-green-600"
            }
            onClick={() => {
                props.contactEmployees(props.userType);
                props.userState[1]({active: props.jobType});
            }}
        >{props.jobType}</button>
    );
}

export default JobTypeBtn;
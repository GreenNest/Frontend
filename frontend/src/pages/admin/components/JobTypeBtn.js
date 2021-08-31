
function JobTypeBtn(props) {
    // console.log(props.user_state[0].active + " " + props.value);
    // console.log(props.value)
    return (
        <button type="button"
            className={
                props.value == props.user_state[0].active?"h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-green-700":"h-10 px-2 font-bold text-white rounded-md shadow-inner focus:outline-none bg-hovergreen hover:bg-green-700"
            }
            onClick={(e) => {
                props.contactEmployees(props.num);
                props.user_state[1]({active: props.value});
            }}
        >{props.jobType}</button>
    );
}

export default JobTypeBtn;
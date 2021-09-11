function CheckBox(props) {
    return (
        <div className="inline-flex items-center">
            <input
                className="w-4 h-4"
                type="checkbox"
                value={props.name}
                onChange={(e) => {
                    const isChecked = e.target.checked;
                    // console.log(isChecked)
                    if (isChecked) {
                        props.type[1]([...props.type[0],e.target.value]);
                    }
                    else{
                        const index = props.type[0].indexOf(props.id.toString())
                        // console.log(index)
                        // console.log(props.id)
                        if(index > -1){
                            props.type[0].splice(index, 1)
                        }

                        props.type[1](props.type[0]);

                    }
                }}
            />
            <span className="ml-2 font-medium">{props.name}</span>
        </div>
    );
}

export default CheckBox;
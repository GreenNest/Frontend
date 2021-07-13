
const CategoryLabel = (props) => {
    return (
        <div className="flex">
            <div className="flex-initial px-2 border border-hovergreen bg-hovergreen text-white rounded-md font-semibold">{props.categoryName}</div>
        </div>
    );
}

export default CategoryLabel;
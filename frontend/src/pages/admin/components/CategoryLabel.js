
function CategoryLabel(props) {
    return (
        <div className="flex">
            <label className="flex-initial p-1 px-2 font-semibold text-white border rounded-md border-hovergreen bg-hovergreen">{props.categoryName}</label>
        </div>
    );
}

export default CategoryLabel;
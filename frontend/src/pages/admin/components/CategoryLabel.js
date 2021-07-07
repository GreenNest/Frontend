
const CategoryLabel = (props) => {
    return (
        <div className="flex">
            <div className="flex-initial px-2 border border-black rounded-md">{props.categoryName}</div>
        </div>
    );
}

export default CategoryLabel;
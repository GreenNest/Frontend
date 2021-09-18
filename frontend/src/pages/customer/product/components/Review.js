import StarRating from './StarRating';

const Review = (props) => {
    return (
        <div className="px-5 py-5 mt-5 bg-gray-100 shadow-inner gap-x-5 rounded-xl md:flex max-w-7xl">
            <div class="md:w-28 md:h-28 sm:w-20 sm:h-20 w-20 h-20 float-left">
                <img class="rounded-full border border-gray-100 shadow-sm" src={props.image} alt="user image" />
            </div>
            <div className="float-right">
                <blockquote>
                    <div className="text-xl font-semibold sm:text-center md:text-left">
                        {props.name}
                    </div>
                    <div className="text-blue-400 sm:text-center md:text-left">
                        {props.date}
                    </div>
                    <StarRating />
                    <p className="mt-4 text-base sm:text-justify">{props.review}</p>
                </blockquote>
            </div>
        </div>
    );
}

export default Review
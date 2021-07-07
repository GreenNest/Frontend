import customer3 from '../../../../assets/customer_img/customer3.jpg';
import StarRating from './StarRating';

const Review = () => {
    return (
        <div className="mt-5 space-x-5 bg-gray-100 shadow-inner rounded-xl md:flex max-w-7xl sm:py-3 sm:px-3">
            <div class="relative md:w-28 md:h-28 sm:w-20 sm:h-20 mx-auto">
                <img class="rounded-full border border-gray-100 shadow-sm" src={customer3} alt="user image" />
            </div>
            <div className="space-y-4">
                <blockquote>
                    <div className="text-xl font-semibold sm:text-center md:text-left">
                        Sulakshanee Theja
                    </div>
                    <div className="text-blue-400 sm:text-center md:text-left">
                        2 days ago
                    </div>
                    <StarRating />
                    <p className="mt-4 text-base sm:text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium, error officiis possimus voluptas voluptatem. Minus, numquam porro pariatur veritatis obcaecati ullam aspernatur est earum ad sit dolor explicabo voluptatem.</p>
                </blockquote>
            </div>
        </div>
    );
}

export default Review
import Button from "./Button";

const OrderRequestCard = () => {
    return (
        <div className="w-auto p-3 mb-10 border-2 border-gray-500 border-opacity-25 rounded-lg shadow-xl">
            <div className="flex">
                <div className="w-1/3">
                    <div className="grid grid-cols-2">
                        <p>Product Category -: </p>
                        <p>Fruits</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Item Name -: </p>
                        <p>Mango Plant</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Quantity Requested -: </p>
                        <p>15</p>
                    </div>
                </div>
                <div className="w-2/3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium, error officiis possimus voluptas voluptatem. Minus, numquam porro pariatur veritatis obcaecati ullam aspernatur est earum ad sit dolor explicabo voluptatem.</p>
                </div>
            </div>
            <div className="flex justify-between mx-10 mt-5">
                <div>
                    <Button btnName="Find Suupliers"/>
                </div>
                <div className="flex gap-x-5">
                    <Button btnName="Accept"/>
                    <Button btnName="Decline"/>
                </div>
            </div>
        </div>
    );
}

export default OrderRequestCard;
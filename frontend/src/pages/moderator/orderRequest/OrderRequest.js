import OrderRequestCard from "./components/OrderRequestCard";

const OrderRequest = () => {
    return (
        <div>
            <div className="w-3/4 pt-5 mx-auto my-10">
                <OrderRequestCard />
                <OrderRequestCard />
                <OrderRequestCard />
            </div>
        </div>
    );
}

export default OrderRequest;
import OrderRequestCard from "./components/OrderRequestCard";
import ModeratorSidebar from '../components/moderatorSidebar';

const OrderRequest = () => {
    return (
        <>
        <ModeratorSidebar/>
        <div className="w-9/12 ml-72">
            <div className="pt-6 mx-auto">
                <OrderRequestCard />
                <OrderRequestCard />
                <OrderRequestCard />
            </div>
        </div>
        </>
    );
}

export default OrderRequest;
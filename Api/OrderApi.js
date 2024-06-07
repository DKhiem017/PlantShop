import axiosClient from "./AxiosClient";

class OrderAPI {
    getAll = (customerID) => {
        const url = `Order/get-order-by-customer?customerID=${customerID}&orderType=0`;
        return axiosClient.get(url, { customerID });
    }

    getOrderByAdmin = () => {
        const url = `Order/get-orders-admin?orderType=0&month=0&today=false`;
        return axiosClient.get(url);
    }

    getDetail = (orderID) => {
        const url = `OrderDetail/get-detail/${orderID}`;
        return axiosClient.get(url, { orderID });
    }

    searchByID = (orderID) => {
        const url = `Order/search-by-id?orderID=${orderID}`;
        return axiosClient.get(url, { orderID });
    }
}

const orderAPI = new OrderAPI();
export default orderAPI;
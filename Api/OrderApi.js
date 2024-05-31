import axiosClient from "./AxiosClient";

class OrderAPI {
    getAll = (customerID) => {
        const url = `Order/get-order-by-customer?customerID=${customerID}&orderType=0`;
        return axiosClient.get(url, { customerID });
    }

    getDetail = (orderID) => {
        const url = `OrderDetail/get-detail/${orderID}`;
        return axiosClient.get(url, { orderID });
    }
}

const orderAPI = new OrderAPI();
export default orderAPI;
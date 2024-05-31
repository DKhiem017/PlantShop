import axiosClient from "./AxiosClient";

class WishListAPI {
    getAll = (customerID) => {
        const url = `WishList/get-all/${customerID}`;
        return axiosClient.get(url);
    }
}

const wishListAPI = new WishListAPI();
export default wishListAPI;
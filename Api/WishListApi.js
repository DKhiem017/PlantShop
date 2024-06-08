import axiosClient from "./AxiosClient";

class WishListAPI {
    getAll = (customerID) => {
        const url = `WishList/get-all/${customerID}`;
        return axiosClient.get(url);
    }

    addWishList = (customerID, productID) => {
        const url = 'WishList/add-wishList';
        return axiosClient.post(url, { customerID, productID });
    }
}

const wishListAPI = new WishListAPI();
export default wishListAPI;
import axiosClient from "./AxiosClient";

class CartApi {
  getAll = (customerID) => {
    const url = `Cart/get-cart-items/${customerID}`;
    return axiosClient.get(url, { customerID });
  };
  addToCart = (customerID, productID, quantity) => {
    const url = `Cart/add-to-cart`;
    return axiosClient.post(url, { customerID, productID, quantity });
  };
  deleteItem = (customerID, productID) => {
    const url = `Cart/remove/${customerID}/${productID}`;
    return axiosClient.delete(url, { customerID, productID });
  };
  deleteAll = (customerID) => {
    const url = `Cart/clear/${customerID}`;
    return axiosClient.delete(url, { customerID });
  };
}

const cartApi = new CartApi();
export default cartApi;

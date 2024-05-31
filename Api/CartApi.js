import axiosClient from "./AxiosClient";

class CartApi {
  getAll = (customerID) => {
    const url = `Cart/get-cart-items/${customerID}`;
    return axiosClient.get(url, { customerID });
  };
}

const cartApi = new CartApi();
export default cartApi;

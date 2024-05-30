import axiosClient from "./AxiosClient";

class ProductApi {
  getAll = () => {
    const url = "Product/get-all";
    return axiosClient.get(url);
  };

  getRecommend = (customerID) => {
    const url = `Product/recommend/${customerID}`;
    return axiosClient.get(url, { customerID });
  };

  getItem = (productID) => {
    const url = `Product/detail/${productID}`;
    return axiosClient.get(url, { productID });
  };
}

const productApi = new ProductApi();
export default productApi;

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
}

const productApi = new ProductApi();
export default productApi;

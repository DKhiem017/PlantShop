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

  getProductByName = (plantName) => {
    const url = `Product/search-by-name?name=${plantName}`;
    return axiosClient.get(url, { plantName });
  };

  deleteItem = (productID) => {
    const url = `Product/delete-product/${productID}`;
    return axiosClient.delete(url, { productID });
  };
}

const productApi = new ProductApi();
export default productApi;

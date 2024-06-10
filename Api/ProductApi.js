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

  getBestSeller = () => {
    const url = "Product/get-best-seller";
    return axiosClient.get(url);
  }

  getCategory = (category) => {
    const url = `Product/get-by-category/${category}`;
    return axiosClient.get(url);
  }

  searchByName = (name) => {
    const url = `Product/search-by-name?name=${name}`;
    return axiosClient.get(url, { name });
  }
}

const productApi = new ProductApi();
export default productApi;

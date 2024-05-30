import axiosClient from "./AxiosClient";

class FeedbackApi {
  getAll = (productID) => {
    const url = `Feedback/get-all-about-product/${productID}`;
    return axiosClient.get(url, { productID });
  };

  getReviewedFeedback = (customerID) => {
    const url = `Feedback/get-all-reviews/${customerID}`;
    return axiosClient.get(url, { customerID });
  };

  //   getRecommend = (customerID) => {
  //     const url = `Product/recommend/${customerID}`;
  //     return axiosClient.get(url, { customerID });
  //   };

  //   getItem = (productID) => {
  //     const url = `Product/detail/${productID}`;
  //     return axiosClient.get(url, { productID });
  //   };
}

const feedbackApi = new FeedbackApi();
export default feedbackApi;

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

  getUnreviewedProduct = (customerID) => {
    const url = `OrderDetail/get-unreviewed-products/${customerID}`;
    return axiosClient.get(url, { customerID });
  };

  newFeedback = (
    orderID,
    customerID,
    productID,
    comment,
    point,
    imageFeedback
  ) => {
    const url = `Feedback/new-feedback`;
    return axiosClient.post(url, {
      orderID,
      customerID,
      productID,
      comment,
      point,
      imageFeedback,
    });
  };
}

const feedbackApi = new FeedbackApi();
export default feedbackApi;

import axiosClient from "./AxiosClient";

class CheckoutAPI {
  checkout = (
    customerID,
    totalPrice,
    paymentType,
    deliveryMethod,
    shippingCost,
    note,
    voucherID,
    name,
    phone,
    address,
    selectedItems
  ) => {
    const url = `Order/new-order?paymentType=${paymentType}`;
    return axiosClient.post(url, {
      customerID,
      totalPrice,
      deliveryMethod,
      shippingCost,
      note,
      voucherID,
      name,
      phone,
      address,
      selectedItems,
    });
  };
  getLink = (orderID, userID, orderTotal, createdDate) => {
    const url = `OnlinePayment/online-payment/url`;
    return axiosClient.post(url, {
      orderID,
      userID,
      orderTotal,
      createdDate,
    });
  };
}

const checkoutAPI = new CheckoutAPI();
export default checkoutAPI;

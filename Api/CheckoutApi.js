import axiosClient from "./AxiosClient";

class CheckoutAPI {
  checkout = (
    customerID,
    totalPrice,
    payMethod,
    deliveryMethod,
    shippingCost,
    note,
    voucherID,
    name,
    phone,
    address,
    selectedItems
  ) => {
    const url = `Order/new-order`;
    return axiosClient.post(url, {
      customerID,
      totalPrice,
      payMethod,
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
}

const checkoutAPI = new CheckoutAPI();
export default checkoutAPI;

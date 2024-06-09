import axiosClient from "./AxiosClient";

class AddressAPI {
  getAll = (customerID) => {
    const url = `DeliveryInfo/get-all/${customerID}`;
    return axiosClient.get(url);
  };

  getDetail = (addressID) => {
    const url = `DeliveryInfo/get-detail/${addressID}`;
    return axiosClient.get(url);
  };

  update = (addressID, customerID, name, address, phone) => {
    const url = `DeliveryInfo/update-delivery-info/${addressID}`;
    return axiosClient.put(url, { customerID, name, address, phone });
  };

  addAddress = (customerID, name, address, phone) => {
    const url = `DeliveryInfo/new-address`;
    return axiosClient.post(url, { customerID, name, address, phone });
  };

  deleteAddress = (addressID) => {
    const url = `DeliveryInfo/delete-address?deliveryID=${addressID}`;
    return axiosClient.delete(url, { addressID });
  };

  setDefault = (customerID, addressID) => {
    const url = `DeliveryInfo/set-default?customerID=${customerID}&deliveryID=${addressID}`;
    return axiosClient.put(url, { customerID, addressID });
  };

  getDefault = (customerID) => {
    const url = `DeliveryInfo/get-default-address/${customerID}`;
    return axiosClient.get(url, { customerID });
  };
}

const addressAPI = new AddressAPI();
export default addressAPI;

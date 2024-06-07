import axiosClient from "./AxiosClient";

class AddressAPI {
    getAll = (customerID) => {
        const url = `DeliveryInfo/get-all/${customerID}`;
        return axiosClient.get(url);
    }

    getDetail = (addressID) => {
        const url = `DeliveryInfo/get-detail/${addressID}`;
        return axiosClient.get(url);
    }

    update = (addressID, customerID, name, address, phone) => {
        const url = `DeliveryInfo/update-delivery-info/${addressID}`;
        return axiosClient.put(url, { customerID, name, address, phone })
    }
}

const addressAPI = new AddressAPI();
export default addressAPI;
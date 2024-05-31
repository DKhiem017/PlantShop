import axiosClient from "./AxiosClient";

class CustomerAPI {
    getInfo = (customerID) => {
        const url = `Customer/get-info/${customerID}`;
        return axiosClient.get(url, { customerID });
    }

    updateInfo = (customerID, name, phone, male, address, registerDay) => {
        const url = `Customer/update-info/${customerID}`;
        return axiosClient.put(url, { customerID, name, phone, male, address, registerDay })
    }
}

const customerAPI = new CustomerAPI();
export default customerAPI;
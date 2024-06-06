import axiosClient from "./AxiosClient";

class AuthAPI {
    login = (email, password) => {
        const url = `Account/login`;
        return axiosClient.post(url, { email, password });
    }

    registerCustomer = (userName, email, password, phone) => {
        const url = 'Account/register?role=Customer';
        return axiosClient.post(url, { userName, email, password, phone })
    }

    addPlants = (customerID, list) => {
        const url = `Account/set-favourite-plants/${customerID}`;
        return axiosClient.post(url, list);
    }
}

const authAPI = new AuthAPI();
export default authAPI;
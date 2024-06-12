import axiosClient from "./AxiosClient";

class ChatAPI {
    getAll = () => {
        const url = 'Chat/get-all-room';
        return axiosClient.get(url);
    }

    getMessages = (customerID) => {
        const url = `Chat/get-messages/${customerID}`;
        return axiosClient.get(url, { customerID })
    }
}

const chatAPI = new ChatAPI();
export default chatAPI;
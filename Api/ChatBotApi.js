import axiosClient from "./AxiosClient";

class ChatBotAPI {
  sendText = (text) => {
    const url = `Chatbot/sendMessage`;
    return axiosClient.post(url, text);
  };
}

const chatBotApi = new ChatBotAPI();
export default chatBotApi;

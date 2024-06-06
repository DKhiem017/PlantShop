import axiosClient from "./AxiosClient";

class ImageSearchApi {
  predictByImg = (imgURL) => {
    const url = `Product/predict-by-image`;
    return axiosClient.postForm(url, { Image: imgURL });
  };
}

const imageSearchApi = new ImageSearchApi();
export default imageSearchApi;

import axiosMulti from "./AxiosMulti";

class ImageSearchApi {
  predictByImg = (type, uri, filename) => {
    const url = "Product/predict-by-image";
    return axiosMulti.post(url, {
      Image: { type: type, uri: uri, name: filename },
    });
  };
}

const imageSearchApi = new ImageSearchApi();
export default imageSearchApi;

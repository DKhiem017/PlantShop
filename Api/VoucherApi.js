import axiosClient from "./AxiosClient";

class VoucherAPI {
    getAll = (customerID) => {
        const url = `Voucher/get-all/${customerID}`;
        return axiosClient.get(url, { customerID });
    }

    getDetail = (voucherID) => {
        const url = `Voucher/get-detail/${voucherID}`;
        return axiosClient.get(url, { voucherID });
    }

    searchByName = (name) => {
        const url = `Voucher/search-by-name?name=${name}`;
        return axiosClient.get(url, { name });
    }
}

const voucherAPI = new VoucherAPI();
export default voucherAPI;
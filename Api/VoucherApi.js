import axiosClient from "./AxiosClient";

class VoucherAPI {
    getAll = (customerID) => {
        const url = `Voucher/get-all/${customerID}`;
        return axiosClient.get(url, { customerID });
    }

    getAllAdmin = () => {
        const url = 'Voucher/get-all';
        return axiosClient.get(url);
    }

    getDetail = (voucherID) => {
        const url = `Voucher/get-detail/${voucherID}`;
        return axiosClient.get(url, { voucherID });
    }

    searchByName = (name) => {
        const url = `Voucher/search-by-name?name=${name}`;
        return axiosClient.get(url, { name });
    }

    newVoucher = (name, dateBegin, dateEnd, value) => {
        const url = 'Voucher/new-voucher';
        return axiosClient.post(url, { name, dateBegin, dateEnd, value })
    }

    updateVoucher = (voucherID, name, dateBegin, dateEnd, value) => {
        const url = `Voucher/update-voucher/${voucherID}`;
        return axiosClient.put(url, { name, dateBegin, dateEnd, value })
    }

    deleteVoucher = (voucherID) => {
        const url = `Voucher/delete-voucher/${voucherID}`;
        return axiosClient.delete(url, { voucherID });
    }
}

const voucherAPI = new VoucherAPI();
export default voucherAPI;
import axiosClient from "./AxiosClient";

class StatisticAPI {
    getRevenueThisMonth = () => {
        const url = 'Stat/get-revenue-thisMonth';
        return axiosClient.get(url);
    }

    getRevenueToday = () => {
        const url = 'Stat/get-revenue-today';
        return axiosClient.get(url);
    }

    getBillsThisMonth = () => {
        const url = 'Stat/get-bills-thisMonth';
        return axiosClient.get(url);
    }

    getTopDealToday = () => {
        const url = 'Stat/get-topDeal-today';
        return axiosClient.get(url);
    }

    getRevenueOfYear = () => {
        const url = 'Stat/revenue-months-ofYear';
        return axiosClient.get(url);
    }
}

const statisticAPI = new StatisticAPI();
export default statisticAPI;
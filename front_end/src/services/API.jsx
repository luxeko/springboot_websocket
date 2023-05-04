import instance from "../configs/axiosConfig.jsx";

const getListBus = (keyword) => {
    return instance.get(`bus?keyword=${keyword}`)
}

export {
    getListBus
}
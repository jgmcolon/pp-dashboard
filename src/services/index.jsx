import axios from "axios";
import {messageAlert} from "../helper/messageAlert";

//interceptors
axios.interceptors.response.use(null, (error) => {
    const expectedError = error?.response?.status !== 200

    if (expectedError) {
        messageAlert({
            icon: 'error',
            text: error?.response?.messages,
            title: 'Oops!'
        })
    }
    return Promise.reject(error);
});

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.timeout = 10000;

const httpAxios = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
};
export default httpAxios;

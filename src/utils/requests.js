import axios from 'axios';
import { toast } from 'react-toastify';

const REDIRECT_PATH = '/auth/login';

export const postRequest = (url, data, token = false, params = {}, headers = {}, responseType, enableLoader = true) => {

    const accessToken = localStorage.getItem('access_token');
    window.setShowLoader(enableLoader);

    return axios.post(url, data, {
        headers: {
            'Accept': 'application/json',
            ...(token && { 'Authorization': `Bearer ${accessToken}` }),
            ...headers
        },
        responseType,
        params
    }).then(res => {
        window.setShowLoader(false);
        return res;
    }).catch((err) => {
        toast.error(err.response.data.message);
        if (err.response.status === 401) {
            window.location.href = REDIRECT_PATH;
            localStorage.clear();
        }
        window.setShowLoader(false);
    });

};

export const getRequest = (url, token = false, params = {}) => {

    const accessToken = localStorage.getItem('access_token');
    window.setShowLoader(true);

    return axios.get(url, {
        headers: {
            'Accept': 'application/json',
            ...(token && { 'Authorization': `Bearer ${accessToken}` })
        },
        params
    }).then(res => {
        window.setShowLoader(false);
        return res;
    }).catch((err) => {
        toast.error(err.response.data.message);
        if (err.response.status === 401) {
            window.location.href = REDIRECT_PATH;
            localStorage.clear();
        }
        window.setShowLoader(false);
    });

};

export const deleteRequest = (url, token = false) => {

    const accessToken = localStorage.getItem('access_token');
    window.setShowLoader(true);

    return axios.delete(url, {
        headers: {
            'Accept': 'application/json',
            ...(token && { 'Authorization': `Bearer ${accessToken}` })
        }
    }).then(res => {
        window.setShowLoader(false);
        return res;
    }).catch((err) => {
        toast.error(err.response.data.message);
        if (err.response.status === 401) {
            window.location.href = REDIRECT_PATH;
            localStorage.clear();
        }
        window.setShowLoader(false);
    });

};

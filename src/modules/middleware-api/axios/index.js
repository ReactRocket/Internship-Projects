import axios from "axios";

const request = (method, url, data = null, config = {}) => {
    return axios({
        method,
        url,
        data,
        ...config
    });
};

export const get = (url, accessToken) => {
    return request("get", `${url}?access-token=${accessToken}`);
}
export const post = (url, data, accessToken) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    };
    return request("post", url, data, config);
};

export const put = (url, id, data, accessToken) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    };
    return request("put", `${url}/${id}`, data, config);
};

export const del = (url, id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    return request("delete", `${url}/${id}`, null, config);
};

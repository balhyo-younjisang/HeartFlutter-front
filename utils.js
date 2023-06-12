import axios from "axios";

const DOMAIN = "https://heart-flutter.herokuapp.com";
axios.defaults.withCredentials = true; // cookie

export const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    }).then((res) => res.data).catch((err) => console.log(err));
}
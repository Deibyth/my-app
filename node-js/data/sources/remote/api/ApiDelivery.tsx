import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'https:// 10.175.92.20:3000/api',
    headers: {
        'content-type':'application/json'
    }
});

export {ApiDelivery};
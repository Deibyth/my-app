import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://10.175.80.37:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export {ApiDelivery};
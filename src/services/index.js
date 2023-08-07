import axios from 'axios';

export const handleRequest = async (url, options = {}) => {
    console.log({ options });
    try {
        const response = await axios(url, options);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const get = (url, options) => {
    return handleRequest(url, { ...options, method: 'GET' });
};
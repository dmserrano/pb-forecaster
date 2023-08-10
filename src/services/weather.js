const { VITE_API_HOST, VITE_API_KEY, VITE_API_URL } = import.meta.env;

import { get } from './index';

const options = {
    headers: {
        'X-RapidAPI-Key': VITE_API_KEY,
        'X-RapidAPI-Host': VITE_API_HOST,
    }
};

export const getForecastWeather = async (searchLocation = '') => {
    const {
        current = {},
        forecast = { forecastday: [] },
        location = {},
    } = await get(`${VITE_API_URL}/forecast.json`, {
        ...options,
        params: {
            q: searchLocation
        }
    });

    return {
        current,
        forecastDay: forecast.forecastday[0],
        location
    }
};

export const getRealTimeWeather = async (searchLocation = '') => {
    const { current = {}, location = {} } = await get(`${VITE_API_URL}/current.json`, {
        ...options,
        params: {
            q: searchLocation
        }
    });

    return { current, location };
};
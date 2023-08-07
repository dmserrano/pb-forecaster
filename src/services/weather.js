const { VITE_API_HOST, VITE_API_KEY, VITE_API_URL } = import.meta.env;

import { get } from './index';

const options = {
    headers: {
        'X-RapidAPI-Key': VITE_API_KEY,
        'X-RapidAPI-Host': VITE_API_HOST,
    }
};

const testResponse = {
    "location": {
        "name": "Chapel Hill",
        "region": "North Carolina",
        "country": "United States of America",
        "lat": 35.95,
        "lon": -79.02,
        "tz_id": "America/New_York",
        "localtime_epoch": 1691435788,
        "localtime": "2023-08-07 15:16"
    },
    "current": {
        "last_updated_epoch": 1691434800,
        "last_updated": "2023-08-07 15:00",
        "temp_c": 28.3,
        "temp_f": 82.9,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 15,
        "wind_kph": 24.1,
        "wind_degree": 230,
        "wind_dir": "SW",
        "pressure_mb": 1013,
        "pressure_in": 29.9,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 74,
        "cloud": 75,
        "feelslike_c": 29.2,
        "feelslike_f": 84.5,
        "vis_km": 16,
        "vis_miles": 9,
        "uv": 9,
        "gust_mph": 14.1,
        "gust_kph": 22.7
    }
};

export const getCurrentRealTimeForecast = async (location = '') => {
    return testResponse;
    // return get(`${VITE_API_URL}/current.json`, {
    //     ...options,
    //     params: {
    //         q: location
    //     }
    // });
};